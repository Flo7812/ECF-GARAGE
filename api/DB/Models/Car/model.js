const { DataTypes } = require('sequelize');
const sequelize = require('../../Connection/GVP');
const toFirstStrUppC = require('../../../Utils/toFirstStringUpperCase');

const Model = sequelize.define('car_model',{

    id:{
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    serie:{
        type: DataTypes.STRING,
        defaultValue:''
    },  
    description:{
        type: DataTypes.STRING,
        deaultValue: ''
    }
},{paranoid: true})


Model.getId = async function(name){
    try {
        const md = toFirstStrUppC(name)
        const model = await Model.findOne({where:{name : md}})
        console.log(model.id);
        return model.id
    } catch (error) {
        return console.log(`Error from Model Brand : Can\'t find this brand :${this.name}`, error)
    }
}
module.exports = Model
// console.log(Model === sequelize.models.Model);