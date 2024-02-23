
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