import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0,
}).promise();

export async function getUsers() {
    const [rows] = await pool.query("SELECT * FROM Users");
    return rows;
};

export async function getUser(id) {
    const [rows] = await pool.query( ` SELECT * FROM Users WHERE Id = ? `, [id]);
    return rows[0];
};


export async function createUser(name, email, phone) {
    await pool.query( 
        ` INSERT INTO Users ( name, email, phone ) 
          VALUES ( ?, ?,? ) `, [name, email, phone]);

    //  cho ra kết quả số lượng  hàng  hoặc id đã được thêm vào

    // const result =await pool.query( 
    //     ` INSERT INTO Users ( name, email, phone ) 
    //       VALUES ( ?, ?,? ) `, [name, email, phone]);

    // const id = result.insertId;

    // return result;
    // return getUser(id);
};

const Users = await getUsers();
const User = await getUser(2);

export default pool;

// module.exports = connection;
// const mysql = require('mysql2');
// require('dotenv').config();

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     // waitForConnections: true,
//     // connectionLimit: 10,
//     // queueLimit: 0,
// });

// module.exports = connection;
