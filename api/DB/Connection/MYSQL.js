
const DB = (mysql,host, user, pass, db)=>{
    const DB = mysql.createConnection({
        host: host,
        user: user,
        password: pass,
        database: db,
        multipleStatements: true,
        })
        return  DB
}
module.exports = DB

