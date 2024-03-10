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
    try {
        const name = toFirstStrUppC(n)
        const motors = await Motor.findAll({where:{type : name}})
        if(!!motors){
            return motors
        }else{
            return
            // throw new Error("this motor with this name doesn\'t exist")
        }
    } catch (error) {
        console.log(error)
        return
            // throw new Error("this motor with this name doesn\'t exist")
    }
    
    
}




Motor.getFullMotor= async function(id){
    try {
        const motor = await Motor.findByPk(id)
        return motor
        return {motor : motor.motorType, description: motor.description}
        if(!!motor){
            return {motor : motor.motorType, description: motor.description}
        }else{
            return
        // throw new Error("this motor with this id doesn\'t exist")
        }
    } catch (error) {
        console.log(error);
        return
        // throw new Error("this motor with this id doesn\'t exist")
    }
}
    
Motor.getId = async function(type, des){

        try {
            const name = toFirstStrUppC(type)
            const motor = await Motor.findOne({where:{type : name, description: des}})
            if(!!motor){
                return motor.id
            }else{
                return
                // throw new Error("this motor with this type and description doesn\'t exist")
            }
        } catch (error) {
            console.log(error);
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