import express from 'express';
import { registerUser, validateUser } from '../Controllers/auth.controllers.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/validate', validateUser);




export const authRoutes = router;