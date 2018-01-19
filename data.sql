DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE items(
	id INTEGER (11) AUTO_INCREMENT NOT NULL,
	Name VARCHAR (45) NOT NULL, 
	Department VARCHAR (45) NOT NULL, 
	Price INTEGER (11) NOT NULL, 
	In_Stock INTEGER (11) NOT NULL,
	PRIMARY KEY (id)

);

INSERT INTO items (Name, Department, Price, In_Stock)
VALUES ("shoe", "clothing", 2, 5);
INSERT INTO items (Name, Department, Price, In_Stock)
VALUES ("shirt", "clothing", 12, 7);
INSERT INTO items (Name, Department, Price, In_Stock)
VALUES ("sock", "clothing", 2, 19);
INSERT INTO items (Name, Department, Price, In_Stock)
VALUES ("foot", "parts", 199, 2);
INSERT INTO items (Name, Department, Price, In_Stock)
VALUES ("pant", "clothing", 4, 37);