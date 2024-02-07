const {DataTypes} = require('sequelize');
const DB = require ('../../dbConfig');

const Testimmony = DB.define('Testimmony',{
    id:{
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    content:{
        type: DataTypes.TEXT,
        defaultValue: '',
        allowNull: false
    },
    author:{
        type: DataTypes.INTEGER(9),
        foreignKey: true
    },
    validateBy:{
        type: DataTypes.INTEGER(4),
        foreignKey: true
    },
    ModifiedAt:{
        type: DataTypes.DATE,
    },
    createdAt:{
        type: DataTypes.DATE
    }
},{paranoid: true});

module.exports = Testimmony