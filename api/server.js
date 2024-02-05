require('dotenv').config();
const express = require('express')
const cors = require('cors')
// const mysql = require('mysql2')
// const dbConfig = require('./dbConfig')
const port = process.env.PORT 
const db = require('./mysql/dbinit')


const api = express()
api.use(cors())
// api.use(db)

/* const myDb = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: dbConfig.password,
    database: dbConfig.database,
})


myDb.connect((err) =>{
    if (err) {
        console.log("Erreur de connectionnnn : "+ err.message);
        return
    } else {
        console.log( 'host: '+dbConfig.host, "",'user: '+dbConfig.user, "", 'password: '+dbConfig.password, "", 'database: '+dbConfig.database);
        console.log("connection reussie à mysql !!!");
    }
});
 */

api.listen(port, ()=>{
    console.log(`server online on port : ${port}`)
})

api.get("/", (req, res)=>{
    res.send("hello from node!")
})