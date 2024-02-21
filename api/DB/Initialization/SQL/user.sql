
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
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    deletedAt DATETIME,
    FOREIGN KEY (role) REFERENCES UserRole(id)
);
