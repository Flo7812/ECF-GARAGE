    START TRANSACTION;
    DROP USER IF EXISTS 'root'@'%';
    CREATE DATABASE IF NOT EXISTS garage;
    USE garage;
    CREATE TABLE user_role (
        id TINYINT AUTO_INCREMENT PRIMARY KEY,
        role VARCHAR(255) NOT NULL
    );
    COMMIT;
    CREATE TABLE User (
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
        FOREIGN KEY (createdBy) REFERENCES user(id) ON UPDATE CASCADE ON DELETE NO ACTION,
        FOREIGN KEY (deletedBy) REFERENCES user(id) ON UPDATE CASCADE ON DELETE NO ACTION
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
        FOREIGN KEY (validator) REFERENCES user(id) ON UPDATE CASCADE ON DELETE NO ACTION,
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
        createdAt DATETIME NOT NULL
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
        content TEXT NOT NULL,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    COMMIT;
    SHOW TABLES;