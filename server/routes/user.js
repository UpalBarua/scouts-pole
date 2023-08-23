import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from '../controllers/userControllers.js';

const router = new Router();

router.get('/:email', getUsers);
router.post('/', createUser);
router.put('/:email', updateUser);
router.delete('/:email', deleteUser);

export default router;