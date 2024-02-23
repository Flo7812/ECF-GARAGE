const { DataTypes } = require('sequelize');
const sequelize = require('../../Connection/GVP');

const Image = sequelize.define('car_images',{

    id:{
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    img1:{
        type: DataTypes.BLOB,
        allowNull: false
    },
    img2:{type: DataTypes.BLOB},
    img3:{type: DataTypes.BLOB},
    img4:{type: DataTypes.BLOB},
    img5:{type: DataTypes.BLOB},

},{
    paranoid: true,
    freezeTableName: true
})


module.exports = Image