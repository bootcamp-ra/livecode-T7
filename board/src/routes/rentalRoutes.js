import express from 'express';
import { list, insert } from '../controllers/rentalController.js';

const router = express.Router();

router.get('/rentals', list);
router.post('/rentals', insert);

export default router;
