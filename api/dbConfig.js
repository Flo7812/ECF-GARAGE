
const {Sequelize} = require('sequelize');

let sequelize = new Sequelize(
    process.env.DB_DATABASE_GVP ,process.env.DB_USER_GVP, process.env.DB_PASSWORD_GVP,{
        host: process.env.DB_HOST_GVP,
        port: process.env.DB_PORT_GVP,
        dialect: 'mysql',
        logging: false
    }
)

sequelize.sync()

module.exports = sequelize