USE garagevparrot;
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
