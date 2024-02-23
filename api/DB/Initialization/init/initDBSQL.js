const mysql = require('mysql2/promise');
const fs = require('fs');
const DB = require('../../Connection/MYSQL');



async function initDB(){

    const rootDB = await DB(mysql,process.env.HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB)
    try {
        await rootDB.connect()
    } catch (error) {
        console.log('Unable to connect my sql with root. ERROR',error)
    }
    try {
        const accounstDB = fs.readFileSync('DB/initialization/SQL/initAccountSQL.sql', 'utf8');
        await rootDB.query(accounstDB)
        console.log('Services accounts administartor  and garage created ');
    } catch (error) {
        console.log('Unable to create services accounts ERROR:',error)
    }finally{
        await rootDB.end()
        console.log('root success deconnect');
    }

    const adminDB = await DB(mysql,process.env.HOST, process.env.GVPA_DB_USER, process.env.GVPA_DB_PASSWORD, process.env.DB)
    try {
        await adminDB.connect()
        console.log('administartor connect success ');
    } catch (error) {
        console.log('Unable to connect mysql with Administrator  ERROR:',error)
    }

    try {
        const initDBSQL = fs.readFileSync('DB/Initialization/SQL/initDBSQL.sql', 'utf8');
        await adminDB.query(initDBSQL)
        console.log('DATABASE garage and TABLES created ');
    } catch (error) {
        console.log('Unable to create garage and TABLES ERROR:',error)
    }finally{
        await adminDB.end()
        console.log('Administrator success deconnect');
    }
    
    try {
        const GVPE = require('../../Connection/GVP')
        await GVPE.authenticate()
            .then(()=> console.log('Sequelize connect success'))
            .catch(e=> console.log('Unable to connect Sequelize ERROR:',e))
        require('../../Models/index')
        await GVPE.sync({alter:true})
            .then(()=> console.log('Sequelize synchronization success'))
            .catch(e=> console.log('Unable to synchronization  Sequelize ERROR:',e))    
    } catch (error) {
        console.log('Sequelize ERROR:',error);
    }
    try {
        console.log('ici')
        await require('./initDBTables')
    } catch (error) {
        console.log('Instances Tables ERROR:',error);
    }
}
initDB()