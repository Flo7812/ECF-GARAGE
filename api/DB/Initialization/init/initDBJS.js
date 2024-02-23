const mysql = require('mysql2/promise');
const fs = require('fs');
const DB = require('../../Connection/MYSQL');
require('../../Models/index')



async function scriptJSInitDB(){

    const rootDB = await DB(mysql,process.env.HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB)

    try {
        await rootDB.connect()
    } catch (error) {
        console.log('Unable to connect my sql with root. ERROR',error)
    }
    try {
        const database = fs.readFileSync('DB/initialization/SQL/ACCOUNT_SERVICES/database_create.sql', 'utf8');
        const users = fs.readFileSync('DB/initialization/SQL/ACCOUNT_SERVICES/users_create.sql', 'utf8');
        const dropRoot = fs.readFileSync('DB/initialization/SQL/ACCOUNT_SERVICES/drop_root.sql', 'utf8');
        
        await rootDB.query(database)
        await rootDB.query(users)
        await rootDB.query(dropRoot)

        const [query1] = await rootDB.query(`
            SHOW DATABASES;
            SELECT user, host FROM mysql.user;
            SHOW GRANTS FOR 'administrator'@'%';
            SHOW GRANTS FOR 'garage'@'%';
            `)
        console.log(query1[0],query1[1],query1[2],query1[3])
    } catch (error) {
        console.log(`Unable to CREATE DATABASE and/or USERS by ${rootDB.config.user} . error:`,error)
    }finally{
        await rootDB.end()
        console.log('root success deconnect');
    }

    const adminDB = await DB(mysql,process.env.HOST, process.env.GVPA_DB_USER, process.env.GVPA_DB_PASSWORD, process.env.TEST_DB)
    try {
        await adminDB.connect()
        console.log(`Connection successful with  ${adminDB.config.user}`)
    } catch (error) {
        console.log('Unable to connect mysql with Administrator ERROR:',error)
    }
    try {
        const userRole = fs.readFileSync('DB/initialization/SQL/user/user_role.sql', 'utf8');
        const user = fs.readFileSync('DB/initialization/SQL/user/user.sql', 'utf8');
        const seller = fs.readFileSync('DB/initialization/SQL/car/seller.sql', 'utf8');
        const brand = fs.readFileSync('DB/initialization/SQL/car/brand.sql', 'utf8');
        const model = fs.readFileSync('DB/initialization/SQL/car/model.sql', 'utf8');
        const motor = fs.readFileSync('DB/initialization/SQL/car/motor.sql', 'utf8');
        const images = fs.readFileSync('DB/initialization/SQL/images/car_images.sql', 'utf8');
        const car = fs.readFileSync('DB/initialization/SQL/car/car.sql', 'utf8');

        await adminDB.query(userRole)
        await adminDB.query(user)
        await adminDB.query(seller)
        await adminDB.query(brand)
        await adminDB.query(model)
        await adminDB.query(motor)
        await adminDB.query(images)
        await adminDB.query(car)

        const [query2] = await adminDB.query(`
            USE garage;
            SHOW TABLES;
            `)
        console.log(query2[1])
    } catch (error) {
        console.log('Unable to create TABLES user* and cars* ERROR:',error)
    }

    try {
        const TestiStatus = fs.readFileSync('DB/initialization/SQL/testimonials/testimony_status.sql', 'utf8');
        const Testi = fs.readFileSync('DB/initialization/SQL/testimonials/testimonials.sql', 'utf8');
        const sectionPage = fs.readFileSync('DB/initialization/SQL/section/section_page.sql', 'utf8');
        const section = fs.readFileSync('DB/initialization/SQL/section/section.sql', 'utf8');
        const timeRange = fs.readFileSync('DB/initialization/SQL/schedules/schedules_time_range.sql', 'utf8');
        const day = fs.readFileSync('DB/initialization/SQL/schedules/schedules_day.sql', 'utf8');
        const week = fs.readFileSync('DB/initialization/SQL/schedules/schedules_week.sql', 'utf8');
        const message = fs.readFileSync('DB/initialization/SQL/message/message.sql', 'utf8');

        await adminDB.query(TestiStatus)
        await adminDB.query(Testi)
        await adminDB.query(sectionPage)
        await adminDB.query(section)
        await adminDB.query(timeRange)
        await adminDB.query(day)
        await adminDB.query(week)
        await adminDB.query(message)

        const [query2] = await adminDB.query(`
            USE garage;
            SHOW TABLES;
            `)
        console.log(query2[1])
    } catch (error) {
        console.log('Unable to create TABLES testimonials ERROR:',error)
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
scriptJSInitDB()