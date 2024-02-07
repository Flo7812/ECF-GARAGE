const {DataTypes} = require('sequelize');
const DB = require ('../../dbConfig');

const Car = DB.define('Car',{
    id:{
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    brand:{
        type: DataTypes.INTEGER(3),
        foreignKey: true

    },
    model:{
        type: DataTypes.INTEGER(3),
        foreignKey: true

    },
    kilometers:{
        type: DataTypes.INTEGER(9),
    },
    img:{
        type: DataTypes.BLOB,
        allowNull: false
    },
    seller:{
        type: DataTypes.INTEGER(3),
        foreignKey: true
    },
    motor:{
        type: DataTypes.INTEGER(1),
        foreignKey: true
    },
    ModifiedAt:{
        type: DataTypes.DATE,
    },
    createdAt:{
        type: DataTypes.DATE
    }
},{paranoid: true});

module.exports = Car