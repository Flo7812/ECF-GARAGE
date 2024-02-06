require('dotenv').config();
const mysql = require('mysql2/promise');


async function initBuildDatabase(){
    const myDb = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: 'root',
        password: '',
        database: process.env.DB_DATABASE,
        multipleStatements: true,
    })
    const [processList] = await myDb.query('SHOW PROCESSLIST;');
        console.log('USERS :', processList);

    try {
        await myDb.connect()
            console.log(`connection successful with USER ${myDb.config.user} `)
    } catch (error) {
        console.log(error);
    }


    try {
        const [query1] = await myDb.query(`DROP USER IF EXISTS 'admingvp'@'%';
                DROP DATABASE IF EXISTS garagevparrot;
                SHOW DATABASES;`)
                console.log('database and user destroys', query1[2] )
    } catch (error) {
        console.log(error);
    }
    
    try {
        const [query2] = await myDb.query(`CREATE DATABASE IF NOT EXISTS garageVparrot;
                SHOW DATABASES;
                CREATE USER IF NOT EXISTS 'admingvp'@'%' IDENTIFIED BY 'gvp123';
                SELECT user, host FROM mysql.user;
                SHOW GRANTS FOR 'admingvp'@'%';
                GRANT ALL PRIVILEGES ON *.* TO 'admingvp'@'%' IDENTIFIED BY 'gvp123' WITH GRANT OPTION;
                SHOW GRANTS FOR 'admingvp'@'%';`)
                console.log('DATABASE garagevparrot and USER admingvp@localhost created', query2[1], query2[3], query2[4], query2[6])
    } catch (error) {
        console.log(err)
    }

    await myDb.end()
        .then(console.log(`${myDb.config.user} disconnected`))
        .catch(error => console.log(error))

    const gvpDB = await mysql.createConnection({
        host: process.env.DB_HOST_GVP,
        user: process.env.DB_USER_GVP,
        password: process.env.DB_PASSWORD_GVP,
        database: process.env.DB_DATABASE_GVP,
        multipleStatements: true,
    })

    try {
        await gvpDB.connect()
            console.log(`connection successful with USER ${gvpDB.config.user} `)
    } catch (error) {
        console.log(error);
    }
    const [processListAndGrant] = await gvpDB.query(`SHOW PROCESSLIST;
        SHOW GRANTS FOR 'admingvp'@'%';`);
        console.log('USERS:', processListAndGrant);

/*     const [DeleteRoot] = await gvpDB.query(`DROP USER 'root'@'%';
        SHOW PROCESSLIST;`);
        console.log('USER root destroy', DeleteRoot[1]); */

    await myDb.end() 
        .then(console.log(`${myDb.config.user} disconnected `))
        .catch(error => console.log(error))
}
initBuildDatabase()