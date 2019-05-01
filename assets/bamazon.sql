DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quanity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name,department_name,price,stock_quanity)
VALUES("TV","ELECTRONICS", 100.50, 15), ("WATER", "DRINKS", 1.00,50), ("CHIPS", "SNACKS", 1.00, 50), ("WATCH", "JEWELRY",75.00,10), ("ADVIL", "MEDICINE", 7.00, 45),("SODA", "SNACKS",2.50,50), ("PLAYSTATION", "ELECTRONICS", 300.00, 15), ("CHARGER","ELECTRONICS", 15.00,75), ("CANDY","SNACKS", 10.00,100), ("HAT", "CLOTHES", 30.00,65)