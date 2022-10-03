import { connection } from '../db/database.js';

const TABLE = 'games';

async function list(req, res) {
  try {
    const games = await connection.query(`
      SELECT 
        ${TABLE}.*, categories.name AS "categoryName"
      FROM ${TABLE} 
      JOIN categories ON ${TABLE}."categoryId" = categories.id;
    `);

    res.send(games.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function insert() {}

export { list, insert };
