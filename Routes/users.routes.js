import express from 'express';
import {getAllUsers, getAllUsersById, addUser, deleteUserById, updateUserById} from '../Controllers/users.controllers.js'
const router = express.Router();

router.get('/all', getAllUsers);
router.get('/:id', getAllUsersById);
router.post('/add', addUser);
router.delete('/remove/:id', deleteUserById);
router.put('/update/:id', updateUserById);
export const userRoutes = router;