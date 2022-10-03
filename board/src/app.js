import express from 'express';

const server = express();

server.get('/status', (req, res) => {
  res.send('its aliveee!');
});

server.listen(3000, () => {
  console.log('Magic happens on 3000');
});
