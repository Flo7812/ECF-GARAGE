const express = require('express')
const cors = require('cors')
const port = process.env.PORT 
let {sequelize} = require('sequelize') 


const api = express()
api.use(cors())


api.listen(port, ()=>{
    console.log(`server online on port : ${port}`)
})

api.get("/", (req, res)=>{
    res.send("hello from node!")
})