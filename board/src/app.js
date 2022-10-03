import express from 'express';
import categoriesRoute from './routes/categoriesRoutes.js';
import gamesRoute from './routes/gamesRoutes.js';

const server = express();
server.use(express.json());

server.use(categoriesRoute);
server.use(gamesRoute);

server.get('/status', (req, res) => {
  res.send('its aliveee!');
});

server.listen(4000, () => {
  console.log('Magic happens on 4000');
});
