DROP DATABASE IF EXISTS bamazonDB; --overrides the database
CREATE database bamazonDB;

USE bamazonDB; --USE is select the database

CREATE TABLE products (
  item_id INT NOT NULL, -- also can do .. item_id INT NOT NULL AUTO_INCREMENT
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

-- ### Alternative way to insert more than one row
 INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
 VALUES 
 (01,"Incredible Cotton Gloves", "Health", 394.00, 103),
 
 (02,"Handcrafted Rubber Keyboard", "Games", 152.00, 77),

(03,"Rustic Frozen Table", "Home", 174.00, 103),

(04,"Gorgeous Frozen Gloves", "Games", 628.00, 67),

(05,"Tasty Granite Soap", " Health", 469.00, 6),

(06,"Practical Cotton Ball", "Home", 733.00, 88),

(07,"Intelligent Metal Chair", "Toys", 986.00, 120),

(08,"Ergonomic Steel Salad", "Health", 567.00, 89),

(09,"Handmade Granite Shoes", "Shoes", 431.00, 45),

(10,"Fantastic Concrete Bacon", "Toys", 933.00, 76),

(11,"Tasty Frozen Bike", "Health", 847.00, 80),

(12,"Generic Metal Fish", "Games", 997.00, 103),

(13,"Tasty Metal cup", "Home", 940.00, 75),

(14,"Unbranded Concrete Shirt", "Home", 583.00, 11),

(15,"Handmade Frozen Keyboard", "Games", 681.00, 458),

(16,"Refined Concrete Chicken", "Health", 92.00, 67),

(17,"Handmade steel Bacon", "Home", 648.00, 89),

(18,"Licensed Cotton Shoes", "Shoes", 224.00, 40),

(19,"Handcrafted Plastic Mouse", "Games", 828.00, 70),

(20,"Refined Frozen Pizza", "Health", 315.00, 86);

