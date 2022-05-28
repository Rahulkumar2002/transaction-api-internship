require("dotenv").config() ; 

const mysql = require('mysql2'); 

const pool = mysql.createPool({
    user : process.env.DB_USER , 
    host : process.env.DB_HOST , 
    password : process.env.DB_PASSWORD , 
    database: process.env.DB_NAME , 
})

// let sql = "SELECT * FROM userdata ; "

// pool.execute(sql ,((err , result) =>{
// if (err) {
//     throw err ; 
// }    
// console.log(result) ; 
// }))

module.exports = pool.promise() ; 