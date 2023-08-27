import { Router } from 'express';
import {
  createPole,
  deletePole,
  getPoleById,
  getPoles,
  updatePole,
} from '../controllers/poleController.js';

const router = new Router();

router.post('/', createPole);
router.get('/', getPoles);
router.get('/:poleId', getPoleById);
router.put('/:poleId', updatePole);
router.delete('/:poleId', deletePole);

export default router;
