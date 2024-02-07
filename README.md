Project ECF "Garage Vincent Parrot"

Serveur:
    XAMMP 8.2.4
    Apache 2.4.56
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
                  axios 1.6.7 
                  jwt

    packages client:  dotenv 16.4.1
                      mysql2 3.9.1
                      cors 2.8.5
                      sequelize
                      bcrypt 5.1.1

/*********************************************************************/
            Project initialization :
/*********************************************************************/
    client :
            npm create vite@latest 
            npm install
            npm install react-router-dom react-route axios jwt
            npm init -y
            git init

            start = npm run dev : "vite"

        api:
            npm install express dotenv mysql2 cors sequelize bcrypt
            npm init -y
            git init
            New-Item .gitgnore


/*********************************************************************/
/***           To start the application in dev mode                ***/
/*********************************************************************/

CMD: cd/api
    /**************************************************/
    /********** Initializing the database *************/

        npm run initDevDB ("node -r dotenv/config initDevDB.js")

    /**************************************************/
    /********** Start the API  ************************/    

        npm start ("node -r dotenv/config --watch server.js")

CMD: cd/client
    /**************************************************/
    /********** Start the application  ****************/

        npm run dev ("vite")

/*********************************************************************/
/***                   To Build the project                        ***/    
/*********************************************************************/

    /**************************************************/
    /********** Initializing the database *************/

        node initBuildDB.js 