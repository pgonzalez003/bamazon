DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);  

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("stapler", "home/office", 3, 25);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("office phone", "home/office", 25, 50);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("pens", "home/office", 1, 500);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("lamp", "home decor", 7, 45);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("essential oil defuser", "garbage", 65, 10);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("razr", "cellular phone", 150, 200);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("MacBook Pro", "electronics", 4500, 50);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("skateboard", "sporting goods", 125, 35);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("lamps", "funiture", 27, 75);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("teddy bear", "stuffed animal", 6, 45);