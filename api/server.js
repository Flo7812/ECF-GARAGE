
const express = require('express');
const cors = require('cors');
const DB = require('./dbConfig');


const api = express();
api.use(cors());
api.use(express.json());

DB.authenticate()
    .then(()=> console.log("DB garagevparrot is connected"))
    .then(()=>
        api.listen(process.env.PORT, ()=>{
        console.log(`server online on port : ${process.env.PORT }`)
        })
    )
    .catch(e => console.log('Error connection :', e))


api.get("/", (req, res)=>{
    res.send("hello from node!")
})