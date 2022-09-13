import express from 'express';
import { insert, list } from '../controllers/transactionController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { transactionMiddleware } from '../middlewares/transactionMiddleware.js';

const router = express.Router();
router.post('/transaction', authMiddleware, transactionMiddleware, insert);
router.get('/transaction', authMiddleware, list);

export default router;
