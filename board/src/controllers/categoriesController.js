import { connection } from '../db/database.js';

const TABLE = 'categories';

//list -> read
async function list(req, res) {
  try {
    const categories = await connection.query(`SELECT * FROM ${TABLE};`);
    res.send(categories.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function insert(req, res) {
  //podeira usar um middleware - joi
  const { name } = req.body;
  if (!name) {
    res.sendStatus(400);
  }
  try {
    const result = await connection.query(
      `INSERT INTO ${TABLE} (name) VALUES ('${name}');`
    );
    if (result.rowCount > 0) {
      return res.send('inserted');
    }
    return res.sendStatus(404);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { list, insert };
