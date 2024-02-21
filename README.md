Project ECF "Garage Vincent Parrot"

Serveur:
    XAMMP 8.2.4
    Apache 2.4.56
    (phpMyadmin)
    MariaDB  10.4.28

Front(client):
    HTML 5
    CSS 3
    React.js 18.2.0
    Javascript Vanille (ECMAScript 2023)
    Vite.js  5.0.12

Back(api)
    Node.js 21.1.0
    NPM 10.2.4 
    Express.js 4.18.2
    ORM : Sequelize 6.36.0


IDE : VScode
    extensions: Database Client JDBC 1.3.4
                Thunder Client 2.17.4
                Reactjs code snippets 2.4.0

    packages api: react-router-dom 6.23.3
                  react-router 1.3.8 (Unnecessary with React 18) 
                  nodemon
                  axios 1.6.7 
                  jwt

    packages client:  dotenv 16.4.1
                      mysql2 3.9.1
                      cors 2.8.5
                      sequelize
                      bcrypt 5.1.1

/*********************************************************************/
/***                Project initialization                         ***/
/*********************************************************************/
    git init
    New-Item .gitgnore
    mkdir api
    cd api
        npm install express dotenv mysql2 cors sequelize bcrypt jsonwebtoken
        npm install --save-dev nodemon 
        npm init -y
    cd ..
    mkdir client
    cd client
        npm create vite@latest 
        npm install
        npm install react-router-dom axios jwt
        npm init -y
        git init



/*********************************************************************/
/***           To start the application in dev mode                ***/
/*********************************************************************/

! Please make a .env file for the API !

CMD: 
    cd api
    New-Item .env
    cd .env

/******enter this datas******/

    PORT=***a port number***
    HOST="***your host***" as default "localhost"
    DB='' ***an empty DB***

***For the first connection, need an user with 'GRANT OPTION' to create the admin, BE CAREFUL note that 'root'@'%' will be destroyed during initialization.***
    DB_USER='root' as default
    DB_PASSWORD='' as defautl
    DB_PORT="***your DB port***" as default for Mysql 3306

***This user will serve as the admin service account for initializing the database, and will then log out.***
    GVP_DB='garagevparrot'
    GVPA_DB_USER="***your name***"
    GVPA_DB_PASSWORD="***your password***"

***This user will connect to the database after initialization with reduced access rights, and will use Sequelize.***
    GVPE_DB_USER='***an username***'
    GVPE_DB_PASSWORD="***a password for a limit user access service account***"


***to implement users in database users table***
    USER_ADMIN_PASSWORD="***a password***"
    USER_JEANBON_PASSWORD="***a password***"
    USER_JULESCESAR_PASSWORD="***a password***"

***to hash pass and use jwt***
    BCRYPT_SALT=***a number***
    JWT_SECRET_SENTENCE="***a big sentence***"
    JWT_DURING=***a duration in hours like 1h***


/**************************************************/
/*********Initialiation of the Database************/

    npm run initDB ("node -r dotenv/config initDB.js")
    
/**************************************************/
/**********Start the API **************************/   
    
    npm start ("node -r dotenv/config server.js")

/**************************************************/
/**********Start the application*******************/
    cd ..
    cd client
    npm run dev ("vite")
    






/*********************************************************************/
/***                   To Build the project                        ***/    
/*********************************************************************/

    /**************************************************/
    /********** Initializing the database *************/

    