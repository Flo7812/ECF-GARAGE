const { DataTypes } = require('sequelize');
const sequelize = require('../../Connection/GVP');
const toFirstStrUppC = require('../../../Utils/toFirstStringUpperCase');

const Motor = sequelize.define('car_motor',{

    id:{
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        deaultValue: '',
        allowNull: false
    }
},{
    paranoid: true,
    freezeTableName: true
})



Motor.getMotorsByType= async function(n){
    const name = toFirstStrUppC(n)
    const motors = await Motor.findAll({where:{type : name}})
    if(!!motors){
        return motors
    }else{
        throw new Error("this motor with this name doesn\'t exist")
    }
}




Motor.getFullMotorbyID = async function(id){
        const motor = await Motor.findByPk(id)
        if(motor){
            if(!!motor.description){
                return `${motor.type} ${motor.description}`
            }else{
                return motor.type
            }
        }else{
            throw new Error("this motor with this id doesn\'t exist")
        }
}
    
Motor.getId = async function(type, des){
        const name = toFirstStrUppC(type)

        const motor = await Motor.findOne({where:{type : name, description: des}})
        if(!!motor){
            return motor.id
        }else{
            return
            // throw new Error("this motor with this type and description doesn\'t exist")
        }
}

Motor.add = async function(body){
    const type = toFirstStrUppC(body.type)
    const mtr = await Motor.findOne({where:{type : type, description : body.description }})
    if(!!mtr){
        return
    }else{
        const motorType = await Motor.findOne({where:{type: type}})
        if(!!motorType){
            if(body.description !== ''){
                return
            }else{
                const newMotor = await Motor.create({type : type, description: body.description})
                return newMotor
            }
        }else{
            const newMotor = await Motor.create({type : type, description: body.description})
            return newMotor
        }
    }
}


module.exports = Motor
// console.log(Motor === sequelize.Motors.Model);