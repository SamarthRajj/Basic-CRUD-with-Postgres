import express from 'express';
import pg from 'pg';
import {pool} from './db.js';
import {userRoutes} from './Routes/users.routes.js'
const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req,res)=>{
    res.send("HELLO FROM SERVER BY SAMARTH RAJ");
});
app.listen(port, ()=>{
    console.log(`listing on port ${port}`)
});