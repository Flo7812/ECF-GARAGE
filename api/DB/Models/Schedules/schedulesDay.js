const { DataTypes } = require('sequelize');
const sequelize = require('../../Connection/GVP');
const SchedulesWeek = require('./SchedulesWeek');


const SchedulesDay = sequelize.define('schedules_day',{
    
    id:{
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    day:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{type:DataTypes.INTEGER},
    morning:{type: DataTypes.INTEGER},
    afternoon:{type: DataTypes.INTEGER},
    fullday:{type: DataTypes.INTEGER}
},{
    paranoid: true,
    freezeTableName: true
});

SchedulesDay.belongsTo(SchedulesWeek,{
    foreignKey:'monday'
})
SchedulesDay.belongsTo(SchedulesWeek,{
    foreignKey:'tuesday'
})
SchedulesDay.belongsTo(SchedulesWeek,{
    foreignKey:'wednesday'
})
SchedulesDay.belongsTo(SchedulesWeek,{
    foreignKey:'thursday'
})
SchedulesDay.belongsTo(SchedulesWeek,{
    foreignKey:'friday'
})
SchedulesDay.belongsTo(SchedulesWeek,{
    foreignKey:'saturday'
})
SchedulesDay.belongsTo(SchedulesWeek,{
    foreignKey:'sunday'
})
SchedulesWeek.hasMany(SchedulesDay)


module.exports = SchedulesDay
// console.log(ShedulesDays === sequelize.models.ShedulesDays);