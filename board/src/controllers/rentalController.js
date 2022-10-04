import { connection } from '../db/database.js';
import {
  badRequestResponse,
  okResponse,
  serverError,
} from './controllersHelper.js';

const TABLE = 'rentals';

async function selectRentals(filter) {
  const query = `
      SELECT 
        rentals.*,
        customers.id AS "customer.id",
        customers.name AS "customer.name",
        games.id AS "game.id",
        games.name AS "game.name",
        games."categoryId" AS "game.categoryId",
        categories.name AS "game.categoryName"
      FROM customers 
        JOIN rentals ON customers.id = rentals."customerId"
        JOIN games ON games.id = rentals."gameId"
        JOIN categories ON games."categoryId" = categories.id`;

  if (filter['customerId']) {
    return connection.query(`${query} WHERE rentals."customerId" = $1;`, [
      filter['customerId'],
    ]);
  }
  if (filter['gameId']) {
    return connection.query(`${query} WHERE rentals."gameId" = $1;`, [
      filter['gameId'],
    ]);
  }
  if (filter['gameId'] && filter['customerId']) {
    return connection.query(
      `${query} WHERE rentals."gameId" = $1 AND rentals."customerId" = $2;`,
      [filter[('gameId', 'customerId')]]
    );
  }

  return connection.query(`${query};`);
}

async function list(req, res) {
  const filter = req.query;

  try {
    const rentals = await selectRentals(filter);
    const result = rentals?.rows.map((rental) => ({
      id: rental.id,
      customerId: rental.customerId,
      gameId: rental.gameId,
      rentDate: rental.rentDate,
      daysRented: rental.daysRented,
      returnDate: rental.returnDate,
      originalPrice: rental.originalPrice,
      delayFee: rental.delayFee,
      customer: {
        id: rental['customer.id'],
        name: rental['customer.name'],
      },
      game: {
        id: rental['game.id'],
        name: rental['game.name'],
        categoryId: rental['game.categoryId'],
        categoryName: rental['game.categoryName'],
      },
    }));

    return okResponse(res, result);
  } catch (error) {
    return serverError(res, error);
  }
}

async function insert(req, res) {
  try {
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
