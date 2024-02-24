USE garagevparrot;
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
