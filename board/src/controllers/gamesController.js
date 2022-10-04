import { connection } from '../db/database.js';
import {
  serverError,
  okResponse,
  badRequestResponse,
  createdResponse,
} from './controllersHelper.js';

const TABLE = 'games';

async function selectGames() {
  return await connection.query(`
      SELECT 
        ${TABLE}.*, categories.name AS "categoryName"
      FROM ${TABLE} 
      JOIN categories ON ${TABLE}."categoryId" = categories.id;
    `);
}

async function selectGamesFilter(name) {
  return await connection.query(
    `
      SELECT 
        ${TABLE}.*, categories.name AS "categoryName"
      FROM ${TABLE} 
      JOIN categories ON ${TABLE}."categoryId" = categories.id
      WHERE ${TABLE}.name ILIKE $1;`,
    [`${name}%`]
  );
}

async function list(req, res) {
  const { name: filter } = req.query;

  try {
    if (!filter) {
      const games = await selectGames();
      return okResponse(res, games.rows);
    }
    const games = await selectGamesFilter(filter);

    return okResponse(res, games.rows);
  } catch (error) {
    return serverError(res, error);
  }
}

async function insert(req, res) {
  const { name, image, stockTotal, categoryId, pricePerDay } = req.body;

  if (!name || !image || !stockTotal || !categoryId || !pricePerDay) {
    return badRequestResponse(res, 'Tá zuado isso dai...');
  }
  try {
    //TODO verificar se existe o category id = categoryId
    const result = await connection.query(
      `INSERT INTO ${TABLE} 
      (name, image, "stockTotal", "categoryId", "pricePerDay")
      VALUES ($1, $2, $3, $4, $5);`,
      [name, image, stockTotal, categoryId, pricePerDay]
    );

    if (result.rowCount > 0) {
      return createdResponse(res, 'game inserted');
    }

    return badRequestResponse(res, 'houve um erro');
  } catch (error) {
    return serverError(res, error);
  }
}

export { list, insert };
