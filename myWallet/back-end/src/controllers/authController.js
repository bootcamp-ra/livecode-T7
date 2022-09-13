import bcrypt from 'bcrypt';
import mongo from '../db/db.js';
import { v4 as uuid } from 'uuid';
import { STATUS_CODE } from '../enums/statusCode.js';
import { COLLECTIONS } from '../enums/collections.js';
import { signUpSchema, signInSchema } from '../schemas/authSchema.js';

async function signUp(req, res) {
  const { name, email, password } = req.body;

  //LEVAR PARA O AUTHMIDDLEWARE
  const isValid = signUpSchema.validate({
    name,
    email,
    password,
  });

  if (isValid.error) {
    return res.send(STATUS_CODE.BAD_REQUEST);
  }

  //Adiciona no dotenv
  const encrypetPassword = bcrypt.hashSync(password, 12);
  try {
    mongo.collection(COLLECTIONS.USERS).insertOne({
      name,
      email,
      password: encrypetPassword,
    });

    return res.send(STATUS_CODE.CREATED);
  } catch (error) {
    console.error(error);
    return res.send(STATUS_CODE.SERVER_ERROR);
  }
}

async function signIn(req, res) {
  const { email, password } = req.body;

  const isValid = signInSchema.validate({
    email,
    password,
  });

  if (isValid.error) {
    return res.send(STATUS_CODE.BAD_REQUEST);
  }
  try {
    const user = await mongo.collection(COLLECTIONS.USERS).findOne({
      email,
    });

    const isValidPass = bcrypt.compareSync(password, user.password);

    if (!user || !isValidPass) {
      return res.send(STATUS_CODE.UNAUTHORIZED);
    }

    const token = uuid();
    mongo.collection(COLLECTIONS.SESSIONS).insertOne({
      userId: user._id,
      token,
    });

    return res.send(token);
  } catch (error) {
    console.log(error);
    return res.send(STATUS_CODE.SERVER_ERROR);
  }
}

export { signUp, signIn };
