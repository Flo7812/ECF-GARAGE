const { DataTypes } = require('sequelize');
const sequelize = require('../../Connection/GVP');


const UserRole = sequelize.define('user_role',{

    id:{
        type: DataTypes.TINYINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true
    },
},{
    timestamps: false,
    freezeTableName: true
})


module.exports = UserRole
// console.log(UserRole === sequelize.models.UserRole);