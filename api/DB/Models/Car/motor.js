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
},{paranoid: true})



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
    if(!mtr){
        const motorType = Motor.getMotorsByType(type)
        if(!!motorType){
            if(body.description !== ''){
                const newBody = {type : type, description: body.description} 
                const newMotor = await Motor.create(newBody)
                return newMotor
            }else{
                return
                // throw new Error("this motor_type without descripton already exists")
            }    
        }else{
            const newBody = {type : type, description: body.description} 
            const newMotor = await Motor.create(newBody)
            return newMotor
        }
    }else{
        return
        // throw new Error("this motor with this description  already exists")
    }
}


module.exports = Motor
// console.log(Motor === sequelize.Motors.Model);