const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../DB/Models/User/user')


exports.login = async(req, res) =>{
    console.log(req.body);
    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({message: 'email or/and password missing'})
    }
    await User.findOne({where: {email : email}, raw: true})
        .then(user =>{
            if(user === null){
                return res.status(401).json({message: 'This account doesn\'t exist'})
            }
            bcrypt.compare(password, user.password)
                .then(async test =>{
                    if(!test){
                        return res.status(401).json({message: 'Wrong password'})
                    }
                    const token = jwt.sign({
                        id: user.id,
                        last_name: user.last_name,
                        first_name: user.first_name,
                        username: user.username,
                        email: user.email,
                        role: user.role
                    },process.env.JWT_SECRET_SENTENCE, {expiresIn: process.env.JWT_DURING})
                    req.body.role = user.role 
                    req.body.name = `${user.first_name} ${user.last_name}`
                    req.body.username = user.username
                    req.body.token = token
                    return res.status(200).json({message: 'Authorized Access', access_token: token, name: req.body.name, username: req.body.username,role: req.body.role })
                })
                .catch(e => res.status(500).json({message: 'Check logging failed', error: e}))
        })
        .catch(e => res.status(500).json({message: " Error Database from here ", error: e}))
}