import pg from 'pg';

const {Pool} = pg; 

export const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'users',
    password: '1234567',
    port: 5253,
})