import { Router } from 'express';
import { getData } from '../controllers/testControllers.js';

const router = new Router();

router.get('/', getData);

export default router;
