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

    
const connection = await myDb.connect((err) =>{
    if (err) {
        console.log("Erreur de connection : "+ err.message);
        return
    } else {
        console.log( 'host: '+dbConfig.host, "",'user: '+dbConfig.user, "", 'password: '+dbConfig.password, "", 'database: '+dbConfig.database);
        console.log(`connection succesful wtih USER ${dbConfig.user} `);
    }
});
// console.log(connection);


const query1 = await myDb.query(`DROP USER IF EXISTS 'admingvp'@'%';
            DROP DATABASE IF EXISTS garagevparrot;
            SHOW DATABASES;`,(err, res)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log('database and user destroys', res[2]);
                }
    })
// console.log(query1);


const query2 = await myDb.query(`CREATE DATABASE IF NOT EXISTS garageVparrot;
            SHOW DATABASES;
            CREATE USER IF NOT EXISTS 'admingvp'@'%' IDENTIFIED BY 'gvp123';
            SELECT user, host FROM mysql.user;
            SHOW GRANTS FOR 'admingvp'@'%';
            GRANT ALL PRIVILEGES ON garagevparrot.* TO 'admingvp'@'%' IDENTIFIED BY 'gvp123' WITH GRANT OPTION;
            SHOW GRANTS FOR 'admingvp'@'%';`,(err, res)=>{
            if(err){
                console.log(err);
            }
            console.log('DATABASE garagevpaarot and USER admingvp@localhosst created', res[1], res[3], res[4], res[6]);
        })
// console.log(query2);

// console.log('ici');

const connectionEnd = await myDb.end((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('florent deconnecté');
    }
})
// console.log(connectionEnd);
}
connection()
/*
const gvpDB = mysql.createConnection({
    host: 'localhost',
    user: 'admingvp',
    password: 'gvp123',
    database: 'garageVparrot',
}) */

// myDb.query(`DROP USER 'root'@'lcoalhost';`, (err, datas)=>{
//     console.log(datas);
// })

/* gvpDB.query(`SHOW DATABASES;`, (err, datas)=>{
    console.log(datas);
})
 */
// module.exports = dbinit