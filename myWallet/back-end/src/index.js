import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoute.js';
import transaction from './routes/transactionRoute.js';

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.use(authRoutes);
server.use(transaction);

server.get('/status', (req, res) => {
  return res.send('ok');
});
server.listen(5000, () => {
  console.log(`Magic happens on ${process.env.PORT_API}`);
});
