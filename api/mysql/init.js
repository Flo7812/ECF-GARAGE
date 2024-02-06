const mysql = require('mysql2/promise')
const dbConfig = require('./dbConfig')

async function connection(){
    const myDb = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: dbConfig.password,
        multipleStatements: true
        // database: dbConfig.database,
    })
    const [processList] = await myDb.query('SHOW PROCESSLIST;');
        console.log('Liste des processus (connexions) actifs :', processList);

    try {
        await myDb.connect()
            console.log(`connection succesful wtih USER ${dbConfig.user} `)
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
                GRANT ALL PRIVILEGES ON garagevparrot.* TO 'admingvp'@'%' IDENTIFIED BY 'gvp123' WITH GRANT OPTION;
                SHOW GRANTS FOR 'admingvp'@'%';`)
                console.log('DATABASE garagevpaarot and USER admingvp@localhosst created', query2[1], query2[3], query2[4], query2[6])
    } catch (error) {
        console.log(err)
    }

    await myDb.end()
        .then(console.log('florent deconnecté'))
        .catch(error => console.log(error))

    const gvpDB = await mysql.createConnection({
        host: 'localhost',
        user: 'admingvp',
        password: 'gvp123',
        database: 'garageVparrot',
        multipleStatements: true
    })

    try {
        await gvpDB.connect()
            console.log(`connection successful wtih USER ${gvpDB.user} `)
    } catch (error) {
        console.log(error);
    }
    const [processListAndGrant] = await gvpDB.query(`SHOW PROCESSLIST;
        SHOW GRANTS FOR 'admingvp'@'%';`);
        console.log('Liste des processus (connexions) actifs :', processListAndGrant);
}
connection()