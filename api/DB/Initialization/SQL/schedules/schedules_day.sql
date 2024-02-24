USE garagevparrot;
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
