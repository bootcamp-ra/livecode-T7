import pg from 'pg';

const { Pool } = pg;

//TODO string connection
const connection = new Pool({
  host: 'localhost', //.env
  port: 5432,
  user: 'postgres',
  password: '12345',
  database: 'tastecamp',
});

export { connection };
