import {pool} from '../db.js';
import { getAllUsersQuery, getUserByIdQuery, addUserQuery, checkEmailQuery, deleteUserByIdQuery, updateUserByIdQuery} from '../Queries/user.queries.js';
export const getAllUsers = async (req,res) => {
    try{
        const results = await pool.query(getAllUsersQuery);
        res.status(200).json(results.rows);
    }
    catch (err) {
        console.log(err);
    }
}
export const getAllUsersById = async (req,res) => {
    try{
        const id = req.params.id;
        const results = await pool.query(getUserByIdQuery,[id]);
        res.status(200).json(results.rows);
    }
    catch (err) {
        console.log(err);
    }
}
export const addUser = async (req,res) => {
    try{
        const {name,email,age,dob} = req.body;
        const check = await pool.query(checkEmailQuery,[email]);
        if(check.rows.length){
            res.send("Email already Exists");
        }
        else{
            await pool.query(addUserQuery,[name,email,age,dob]);
            res.status(200).send("User added succesfully");
        }
        
    }
    catch (err) {
        console.log(err);
    }
}
export const deleteUserById = async (req,res) => {
    try{
        const id = req.params.id;
        const results = await pool.query(deleteUserByIdQuery,[id]);
        if(!results.rowCount){
            res.status(200).send("User Does Not Exists");
        }
        else{
            res.status(200).send("User removed succesfully");
        }
        
    
        
    }
    catch (err) {
        console.log(err);
    }
}
export const updateUserById = async (req,res) => {
    try{
        const id = req.params.id;
        const {name, email, age, dob} = req.body;
        const results = await pool.query(getUserByIdQuery,[id]);
        if(!results.rowCount){
            res.status(200).send("User Does Not Exists");
        }
        else{
            await pool.query(updateUserByIdQuery,[id,name,email,age,dob]);
            res.status(200).send("User updated succesfully");
        }
        
    
        
    }
    catch (err) {
        console.log(err);
    }
}