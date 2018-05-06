DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(5) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    burger_name VARCHAR(50),
    devoured BOOLEAN
);