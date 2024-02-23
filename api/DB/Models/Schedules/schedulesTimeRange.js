const { DataTypes } = require('sequelize');
const sequelize = require('../../Connection/GVP');
const SchedulesDay = require('./schedulesDay');


const SchedulesTimeRange = sequelize.define('schedules_time_range',{
    
    id:{
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    time_range:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    paranoid: true,
    freezeTableName: true
});

SchedulesTimeRange.belongsTo(SchedulesDay, {
    foreignKey: 'morning'
})
SchedulesTimeRange.belongsTo(SchedulesDay, {
    foreignKey: 'afternoon'
})
SchedulesTimeRange.belongsTo(SchedulesDay, {
    foreignKey: 'fullday'
})
SchedulesDay.hasMany(SchedulesTimeRange)


module.exports = SchedulesTimeRange
// console.log(ShedulesTimeRange === sequelize.models.ShedulesTimeRange);