import express from 'express';
import pg from 'pg';
// import pkg from 'dotenv';
// const {dotenv} = pkg;
import {pool} from './db.js';
import {userRoutes} from './Routes/users.routes.js'
import { authRoutes } from './Routes/auth.routes.js';
const app = express();
const port = 3000;
// dotenv.config();
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/auth', authRoutes);

app.get('/', (req,res)=>{
    res.send("HELLO FROM SERVER BY SAMARTH RAJ");
});
app.listen(port, ()=>{
    console.log(`listing on port ${port}`)
});