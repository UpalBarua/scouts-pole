import { Router } from 'express';
import { createUser, deleteUser, getUsers, updateUser } from '../controllers/userController.js';

const router = new Router();

router.get('/users/:email', getUsers);
router.post('/users', createUser);
router.put('/users/:email', updateUser);
router.delete('/users/:email', deleteUser);

export default router;
