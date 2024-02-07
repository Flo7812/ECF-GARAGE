const {DataTypes} = require('sequelize');
const DB = require ('../../dbConfig');

const User = DB.define('User',{
    id:{
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    lastname:{
        type: DataTypes.STRING(255),
        defaultValue: '',
        allowNull: false
    },
    firstname:{
        type: DataTypes.STRING(255),
        defaultValue: '',
        allowNull: false    
    },
    pseudo:{
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail: true
        },
        unique: true
    },
    dateOfBirth:{
        type: DataTypes.DATE
    },
    address:{
        type: DataTypes.STRING(255)
    },
    role:{
        type: DataTypes.INTEGER(2),
        foreignKey: true
    },
    password:{
        type: DataTypes.STRING(128),
        is: /^[0-9a-f]{128}$/i
    },
    ModifiedAt:{
        type: DataTypes.DATE,
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: false
    }
},{paranoid: true});

module.exports = User