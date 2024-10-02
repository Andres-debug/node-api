import express from 'express';
import { getUsers, createUser, updateUser, deleteUser,login,register } from '../controllers/userController.js';

const router = express.Router();

//Usuarios
router.get('/users', getUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.post('/register',register);
router.post('/login',login);



export default router;
