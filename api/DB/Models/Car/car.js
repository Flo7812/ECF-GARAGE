const { DataTypes } = require('sequelize');
const sequelize = require('../../Connection/GVP');
const Seller = require('./seller')
const Brand = require('./brand')
const Model = require('./model')
const Motor = require('./motor')
const Image = require('./imagesCar')
const User = require('../User/user')



const Car = sequelize.define('Cars',{

    id:{
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    ref:{
        type: DataTypes.STRING,
        defaultValue:'',
        unique: true
    },
    brand:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    model:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    motor:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    kilometers:{
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    initial_registration:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        deaultValue: ''
    },
    seller:{
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    images:{
        type: DataTypes.INTEGER,
        unique: true
        // allowNull: false
    },
    createdBy:{
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    deletedBy:{
        type: DataTypes.INTEGER(11),
    }
},{
    paranoid: true,
    freezeTableName: true
})

Car.belongsTo(Seller,{foreignKey:'seller'}) 
Seller.hasMany(Car, {
    onDelete: 'CASCADE',
    foreignKey: 'seller'
})

Car.belongsTo(Brand,{
    onDelete: 'NO ACTION',
    foreignKey:'brand', 
})
Brand.hasMany(Car, {foreignKey: 'brand'})

Car.belongsTo(Model,{
    onDelete: 'NO ACTION',
    foreignKey:'model', 
})
Model.hasMany(Car, {foreignKey: 'model'})

Car.belongsTo(Motor,{
    onDelete: 'NO ACTION',
    foreignKey:'motor', 
})
Motor.hasMany(Car, {foreignKey: 'motor'})

Car.belongsTo(User,{
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
    foreignKey:'createdBy', 
})
User.hasMany(Car, {foreignKey: 'createdBy'})

Car.belongsTo(User,{
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
    foreignKey:'deletedBy', 
})
User.hasMany(Car, {foreignKey: 'deletedBy'})

Car.belongsTo(Image,{
    onDelete: 'CASCADE',
    foreignKey: 'img'
})
Image.hasMany(Car,{foreignKey: 'images'})

    
/*************************************************/

Car.addRef = async function(d, id, br, md, mt ){
    
    const date = new Date(d)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const FomatDate = `${year}${month}${day}`
    const idu = id.padStart(4, '0').toString()
    const brand = br.padStart(3, '0')
    const model = md.padStart(3, '0')
    const motor = mt.padStart(3, '0')
    const ref = FomatDate+'-'+idu+'-'+brand+'-'+model+'-'+motor
    // console.log(typeof ref,' ',ref);
    return ref
}

Car.add = async function(body){
    try {
        const suCar = await Car.create(body)
        const ref = await Car.addRef(suCar.createdAt, suCar.id.toString(), suCar.brand.toString(), suCar.model.toString(), suCar.motor.toString())
        suCar.ref = ref
        const newCar = {
            ...body,
            ref
        }
        await Car.update(newCar, {where: {id : suCar.id}})
        const superCar = await Car.findByPk(suCar.id)
        return superCar
    } catch (error) {
        console.log('Unable to create a superCar',error);
    }
}


Car.getCarByRef = async function(){

}

Car.afterRestore = async function(){

}


Car.getDisplayCard = async function(){

}

Car.getDisplayCards = async function(){
    
}


module.exports = Car
// console.log(Car === sequelize.models.Car);