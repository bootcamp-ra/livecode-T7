import express from 'express';
import { list, insert } from '../controllers/gamesController.js';

const router = express.Router();

router.get('/games', list);
router.post('/games', insert);

export default router;
