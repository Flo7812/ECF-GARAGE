
CREATE TABLE car_model (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    serie VARCHAR(255) DEFAULT '',
    description VARCHAR(255) DEFAULT ''
);