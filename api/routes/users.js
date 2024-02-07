const express = require('express')
const User = require('../models/users/user')
let router = express.Router()

router.get('', (req, res)=>{
    User.findAll()
        .then(users => res.json({data: users}))
        .catch(e => res.status(500).json({message: "Error Database", error: e}))
})


router.get('/:id', (req, res)=>{
    let userId = parseInt(req.params.id)
    if(!userId){
        return res.status(400).json({message: "id parameter missing"})
    }
    User.findOne()
    .then(user => {
        if((user === null)){
            return res.status(404).json({message: "user with this id doesn't exist"})
        }
        return res.json({data: user})
    })
    .catch(e => res.status(500).json({message: "Error Database", error: e}))
    
})


router.put('', (req, res)=>{
    const {lastname, firstname, pseudo, email, dateOfBirth, adress, role, password} = req.body 
    if(!lastname || !firstname || !pseudo || !email || !dateOfBirth || !adress || !role || !password){
        return res.status(400).json({message: "data(s) missing"})
    }
    User.findOne({where : {email : email}, raw: true})
    .then(user => {
        if(user !== null){
            return res.status(409).json({message: `this email : ${email} already exists for this user : '???' `})
        }
        User.create(req.body)
            .then(user => res.json({message: 'user created', data: user}))
            .catch(e => res.status(500).json({message: "Error Database", error: e}))
    })
    
    
    
})


router.patch('', (req, res)=>{
    User.findAll()
    .then(users => res.json({data: users}))
    .catch(e => res.status(500).json({message: "Error Database", error: e}))
    
})


router.delete('', (req, res)=>{
    User.findAll()
    .then(users => res.json({data: users}))
    .catch(e => res.status(500).json({message: "Error Database", error: e}))
    
})