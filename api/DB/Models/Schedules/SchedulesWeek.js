const { DataTypes } = require('sequelize');
const sequelize = require('../../Connection/GVP');


const ShedulesWeek = sequelize.define('schedules_week',{
    
    id:{
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Horaires'
    },
    desciption:{type: DataTypes.STRING},
    monday:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tuesday:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    wednesday:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    thursday:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    friday:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    saturday:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sunday:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    paranoid: true,
    freezeTableName: true
});


module.exports = ShedulesWeek