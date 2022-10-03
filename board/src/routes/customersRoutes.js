import express from 'express';
import { list, insert, update } from '../controllers/customersController.js';

const router = express.Router();

router.get('/customers', list);
router.post('/customers', insert);
router.put('/customers', update);

export default router;
