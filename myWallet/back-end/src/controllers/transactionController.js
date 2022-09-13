import { STATUS_CODE } from '../enums/statusCode.js';
import mongo from '../db/db.js';
import { COLLECTIONS } from '../enums/collections.js';
import { TRANSACTIONS_TYPE } from '../enums/transaction.js';

async function insert(req, res) {
  const { description, value, type } = req.body;

  const { session, user } = res.locals;

  try {
    mongo.collection(COLLECTIONS.TRANSACTIONS).insertOne({
      description,
      value,
      type,
      userId: session.userId,
      date: +new Date(),
    });

    return res.send(STATUS_CODE.CREATED);
  } catch (error) {
    console.log(error);
    return res.send(STATUS_CODE.SERVER_ERROR);
  }
}

async function list(req, res) {
  const { user } = res.locals;

  try {
    const transactions = await mongo
      .collection(COLLECTIONS.TRANSACTIONS)
      .find({
        userId: user._id,
      })
      .toArray();

    const total = transactions.reduce((acc, curr) => {
      if (curr.type === TRANSACTIONS_TYPE.DEBIT) {
        return acc - curr.value;
      }
      return acc + curr.value;
    }, 0);

    transactions.push({
      type: 'total',
      value: total,
    });
    return res.send(transactions);
  } catch (error) {
    console.log(error);
    return res.send(STATUS_CODE.BAD_REQUEST);
  }
}

export { insert, list };
