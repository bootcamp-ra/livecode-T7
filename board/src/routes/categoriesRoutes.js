import express from 'express';
import { list, insert } from '../controllers/categoriesController.js';

const router = express.Router();

router.get('/categories', list);
router.post('/categories', insert);

export default router;
