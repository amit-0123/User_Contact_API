
import express from 'express'
import { userLogin, userRegister } from '../controller/User.js';

// Import Express and create a router instance.
const router = express.Router();

// user register
router.post("/register",userRegister); //   /api/user/register

// user login
router.post("/login",userLogin) //  /api/user/login

export default router;