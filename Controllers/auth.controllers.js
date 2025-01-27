import {pool} from '../db.js';
// import pkg from 'dotenv';
// const {dotenv} = pkg;
import { getAllUsersQuery, getUserByIdQuery, addUserQuery, checkEmailQuery, deleteUserByIdQuery, updateUserByIdQuery} from '../Queries/user.queries.js';
import jwt from 'jsonwebtoken';

function generateToken(user){
    const payload = {
        email: user.email,
        age: user.age,
        role: user.role
    }
    const secret = 'samarth_raj_2004';
    const time = {expiresIn: '1h'};

    return jwt.sign(payload,secret,time);
}

function verifyToken(token){
    const secret = 'samarth_raj_2004';
    try{
        const decoded = jwt.verify(token, secret);
        console.log(decoded);
        return {status: true, message: 'User Verified Succesfully'};
    }
    catch(err){
        return {status: false, message: 'User Verification Failed', error: err.message};
    }
}

export const registerUser = async (req,res) => {
    try{
        const {name,email,age,dob,role} = req.body;
        const user = {
            name,
            email,
            age,
            dob,
            role
        };
        const check = await pool.query(checkEmailQuery,[email]);
        if(check.rows.length){
            res.send("Email already Exists");
        }
        else{
            await pool.query(addUserQuery,[name,email,age,dob]);
            // generate token
            const token = generateToken(user);
            console.log(token);
            // res.send(token);
            res.status(200).send({
                token,
                message: "User registered succesfully"});
        }
    }
    catch (err){
        console.log(err);
    }
} 
export const validateUser = async (req,res) => {
    const user = req.body;
    const header = req.headers.authorization;
    // res.send("All Good");
    console.log(header);
    console.log(user);
    const result = verifyToken(header);
    if(result.status){
        res.status(200).send(result.message);
    }
    else{
        res.status(200).send({message: result.message, error: result.error});
    }
}