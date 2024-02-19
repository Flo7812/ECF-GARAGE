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

Motor.getName = async function(id){
    try {
        const motor = await Motor.findByPk(id)
        return motor.type 
    } catch (error) {
        return console.log(`Error from Model Brand : Can\'t find this motor `, error)
    }
}

Motor.getFullMotor = async function(id){
    try {
        const motor = await Motor.findByPk(id)
        return `${motor.type} ${motor.description}`
    } catch (error) {
        return console.log(`Error from Model Brand : Can\'t find this motor `, error)
    }
}
    
Motor.getId = async function(name){
    try {
        const mt = toFirstStrUppC(name)
        const motor = await Motor.findOne({where:{type : mt}})
        return motor.id
    } catch (error) {
        return console.log(`Error from Model Brand : Can\'t find this motor `, error)
    }
}
Motor.add = async function(body){

}


module.exports = Motor
// console.log(Motor === sequelize.Motors.Model);