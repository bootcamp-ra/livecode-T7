import { STATUS_CODE } from '../enums/statusCode.js';
import { TRANSACTIONS_TYPE } from '../enums/transaction.js';
import { transactionSchema } from '../schemas/transactionSchema.js';

function transactionMiddleware(req, res, next) {
  const { description, value, type } = req.body;

  const isValid = transactionSchema.validate({
    description,
    value,
    type,
  });

  if (isValid.error) {
    return res.send(STATUS_CODE.BAD_REQUEST);
  }

  if (
    type.toLowerCase() !== TRANSACTIONS_TYPE.CREDIT &&
    type.toLowerCase() !== TRANSACTIONS_TYPE.DEBIT
  ) {
    return res.send(STATUS_CODE.BAD_REQUEST);
  }

  next();
}

export { transactionMiddleware };
