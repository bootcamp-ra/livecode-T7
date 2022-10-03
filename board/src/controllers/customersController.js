import { connection } from '../db/database.js';
import {
  badRequestResponse,
  okResponse,
  serverError,
} from './controllersHelper.js';

const TABLE = 'customers';

async function selectCustomers() {
  //Não precisa do await
  return connection.query(`SELECT * FROM ${TABLE};`); //Promise
}

async function selectCustomersByCpf(filterCpf) {
  //Não precisa do await
  return connection.query(
    `
    SELECT * FROM ${TABLE} WHERE cpf LIKE $1;
  `,
    [`${filterCpf}%`]
  ); //Promise
}

async function list(req, res) {
  const { cpf: filterCpf } = req.query;
  try {
    if (!filterCpf) {
      const customers = await selectCustomers();
      return okResponse(res, customers.rows);
    }

    const customers = await selectCustomersByCpf(filterCpf);
    return okResponse(res, customers.rows);
  } catch (error) {
    serverError(res, error);
  }
}

async function insert(req, res) {
  const { name, cpf, birthday, phone } = req.body;

  if (!name || !cpf || !birthday || !phone) {
    return badRequestResponse(res, 'houve um erro no objeto cliente');
  }

  try {
    const result = await connection.query(
      `
      INSERT INTO ${TABLE} 
        (name, cpf, birthday, phone)
      VALUES 
        ($1, $2, $3, $4);
    `,
      [name, cpf, birthday, phone]
    );

    if (result.rowCount > 0) {
      return okResponse(res, 'customer inserted');
    }

    return badRequestResponse(res, 'error');
  } catch (error) {
    serverError(res, error);
  }
}

async function update(req, res) {
  try {
  } catch (error) {
    serverError(res, error);
  }
}

export { list, insert, update };
