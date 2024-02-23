const { DataTypes } = require('sequelize');
const sequelize = require('../../Connection/GVP');
const toFirstStrUppC = require('../../../Utils/toFirstStringUpperCase');


const Seller = sequelize.define('car_seller',{
    
    id:{
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false    
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail: true
        },
        unique: true
    },
    phone:{
        type: DataTypes.INTEGER(10).ZEROFILL,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    paranoid: true,
    freezeTableName: true
});

Seller.getId = async function (name){
        const ln = toFirstStrUppC(name)
        const seller = await Seller.findOne({where: {last_name : ln}})
        if(seller){
            return seller.id
        }else{
            return
        }
}

Seller.addFromCarAdd = async function (ln,fn,e,p,ad){
        let body = {last_name : ln, first_name : fn, email: e, phone : p, address : ad}
        const seller = await Seller.create(body)
        if(seller){
            return seller
        }else{
            throw new Error('ERROR from Model Seller => addFromCarAdd ')
        }
        
}

module.exports = Seller
// console.log(Seller === sequelize.models.Seller);