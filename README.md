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

    packages client: 
                react-router-dom 6.23.3
                axios 1.6.7 

    packages api: 
                bcrypt 5.1.1 
                cors 2.8.5
                dotenv 16.4.1
                express 4.18.2
                jsonwebtoken 9.0.2
                mysql2 3.9.1
                sequelize 6.36.0
                

/*********************************************************************/
/***                Packages initialization                        ***/
/*********************************************************************/

    cd client
        npm install
        npm install react-router-dom axios 
    cd ..
    cd api
        npm install express dotenv mysql2 cors sequelize bcrypt jsonwebtoken




/*********************************************************************/
/***           To start the application                            ***/
/*********************************************************************/

! Please make a .env file for the API !

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
    GVPA_DB_USER="administrator"  
    GVPA_DB_PASSWORD="@dmiN123"

***This user will connect to the database after initialization with reduced access rights, and will use Sequelize.***
    GVPE_DB_USER='garage'
    GVPE_DB_PASSWORD="G@r@ge123"


***to implement users in database users table***
    USER_ADMIN_PASSWORD="***a password***"
    USER_JEANBON_PASSWORD="***a password***"

***to hash pass and use jwt***
    BCRYPT_SALT=***a number***
    JWT_SECRET_SENTENCE="***a big sentence***"
    JWT_DURING=***a duration in hours like 1h***


/**************************************************/
/*********Initialization of the Database***********/

Option 1: 
==> from api:

    npm run intSeq

Option 1 bis with Shell:    
 (with xampp, otherwise from your shell mysql path file ==>)  
    "in vscode from" C:/
    cd xammp/mysql/bin 
==> ./mysql -u root -p   
    "push ENTER"

    START TRANSACTION;
    CREATE USER IF NOT EXISTS 'administrator'@'%' IDENTIFIED BY '@dmiN123';
    GRANT ALL PRIVILEGES ON *.* TO 'administrator'@'%' IDENTIFIED BY '@dmiN123' WITH GRANT OPTION;
    SHOW GRANTS FOR 'administrator'@'%';
    SELECT user, host FROM mysql.user;
    COMMIT;

==> exit;
==> ./mysql -u administrator -p 
    @dmiN123 

    START TRANSACTION;
    CREATE DATABASE IF NOT EXISTS garagevparrot;
    SHOW DATABASES;
    CREATE USER IF NOT EXISTS 'garage'@'%' IDENTIFIED BY 'G@r@ge123';
    GRANT SELECT, INSERT, UPDATE, CREATE, DELETE ON garagevparrot.* TO 'garage'@'%' IDENTIFIED BY 'G@r@ge123';
    SHOW GRANTS FOR 'garage'@'%';
    DROP USER IF EXISTS 'root'@'%';
    SELECT user, host FROM mysql.user;
    USE garagevparrot;
    START TRANSACTION;
    COMMIT;
    
    CREATE TABLE user_role (
        id TINYINT AUTO_INCREMENT PRIMARY KEY,
        role VARCHAR(255) NOT NULL
    );
    CREATE TABLE users (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        last_name VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        date_of_birth DATE NOT NULL,
        address VARCHAR(255) NOT NULL,
        phone INT(10) ZEROFILL NOT NULL,
        password CHAR(64) NOT NULL,
        role TINYINT NOT NULL DEFAULT 2,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (role) REFERENCES user_role(id)
    );
    CREATE TABLE car_seller (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        last_name VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone INT(10) ZEROFILL NOT NULL,
        address VARCHAR(255) NOT NULL,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE car_brand (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE car_model (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        serie VARCHAR(255) DEFAULT '',
        description VARCHAR(255) DEFAULT '',
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE car_motor (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        description VARCHAR(255) DEFAULT '' NOT NULL,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE car_images (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        img1 LONGBLOB NOT NULL,
        img2 LONGBLOB,
        img3 LONGBLOB,
        img4 LONGBLOB,
        img5 LONGBLOB
    );
    CREATE TABLE cars (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        ref VARCHAR(255) DEFAULT '' UNIQUE,
        brand INT NOT NULL,
        model INT NOT NULL,
        motor INT NOT NULL,
        price INT NOT NULL,
        kilometers INT NOT NULL,
        initial_registration DATE NOT NULL,
        description TEXT DEFAULT '',
        seller INT(11) NOT NULL,
        images INTEGER UNIQUE,
        createdBy INT(11) NOT NULL,
        deletedBy INT(11),
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (seller) REFERENCES car_seller(id) ON DELETE CASCADE,
        FOREIGN KEY (brand) REFERENCES car_brand(id) ON DELETE NO ACTION,
        FOREIGN KEY (model) REFERENCES car_model(id) ON DELETE NO ACTION,
        FOREIGN KEY (motor) REFERENCES car_motor(id) ON DELETE NO ACTION,
        FOREIGN KEY (images) REFERENCES car_images(id) ON DELETE CASCADE,
        FOREIGN KEY (createdBy) REFERENCES users(id) ON UPDATE CASCADE ON DELETE NO ACTION,
        FOREIGN KEY (deletedBy) REFERENCES users(id) ON UPDATE CASCADE ON DELETE NO ACTION
    );
        CREATE TABLE testimony_Status (
        id TINYINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        ValidateStatus VARCHAR(255) NOT NULL,
        isValidated BOOLEAN NOT NULL,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE testimonials (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        author_last_name VARCHAR(255) NOT NULL,
        author_first_name VARCHAR(255) NOT NULL,
        author_email VARCHAR(255) NOT NULL UNIQUE,
        content TEXT NOT NULL,
        status TINYINT NOT NULL DEFAULT 2,
        validator INT(11),
        deletedBy INT(11),
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (validator) REFERENCES users(id) ON UPDATE CASCADE ON DELETE NO ACTION,
        FOREIGN KEY (status) REFERENCES testimony_Status(id) ON UPDATE CASCADE ON DELETE NO ACTION
    );
    CREATE TABLE section_page (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        page_name VARCHAR(255) NOT NULL,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE section (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT DEFAULT '',
        img LONGBLOB NOT NULL,
        position INT DEFAULT 0,
        page INT(11) NOT NULL,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (page) REFERENCES section_page(id) ON DELETE CASCADE ON UPDATE CASCADE
    );
    CREATE TABLE schedules_time_range (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        time_range VARCHAR(255) NOT NULL,
        createdAt DATETIME NOT NULL,
        updatedAt DATETIME NOT NULL
    );
    CREATE TABLE schedules_day (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        day VARCHAR(255) NOT NULL,
        description VARCHAR(255),
        morning INTEGER,
        afternoon INTEGER,
        fullday INTEGER,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (morning) REFERENCES schedules_time_range(id),
        FOREIGN KEY (afternoon) REFERENCES schedules_time_range(id),
        FOREIGN KEY (fullday) REFERENCES schedules_time_range(id)
    );
    CREATE TABLE schedules_week (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL DEFAULT 'Horaires',
        description VARCHAR(255),
        monday INTEGER NOT NULL,
        tuesday INTEGER NOT NULL,
        wednesday INTEGER NOT NULL,
        thursday INTEGER NOT NULL,
        friday INTEGER NOT NULL,
        saturday INTEGER NOT NULL,
        sunday INTEGER NOT NULL,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (monday) REFERENCES schedules_day(id),
        FOREIGN KEY (tuesday) REFERENCES schedules_day(id),
        FOREIGN KEY (wednesday) REFERENCES schedules_day(id),
        FOREIGN KEY (thursday) REFERENCES schedules_day(id),
        FOREIGN KEY (friday) REFERENCES schedules_day(id),
        FOREIGN KEY (saturday) REFERENCES schedules_day(id),
        FOREIGN KEY (sunday) REFERENCES schedules_day(id)
    );
    CREATE TABLE message (
        id INT AUTO_INCREMENT PRIMARY KEY,
        sender_last_name VARCHAR(255) NOT NULL,
        sender_first_name VARCHAR(255) NOT NULL,
        sender_email VARCHAR(255),
        sender_phone VARCHAR(255) NOT NULL,
        object VARCHAR(255) NOT NULL,
        refCar VARCHAR(255) NOT NULL,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    SHOW TABLES;
    COMMIT;

==> exit;

==> from api:

    npm run intSeq
    
Option 2: to show all steps (one table by file) in console.log

    npm run initJS
    
/**************************************************/
/**********Start the API **************************/   
 
    npm start 

/**************************************************/
/**********Start the application*******************/

    cd ..
    cd client
    npm run dev 

in private, you can connect with the email and password than you had chosen earlier :
    USER_ADMIN_PASSWORD="***a password***"  ===> with admin access rights 
    USER_JEANBON_PASSWORD="***a password***"  ===> with employee rigts
    






/*********************************************************************/
/***                   To Build the project                        ***/    
/*********************************************************************/

    /**************************************************/
    /********** Initializing the database *************/

    