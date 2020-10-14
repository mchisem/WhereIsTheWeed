DROP DATABASE IF EXISTS weedUser_db;
CREATE DATABASE weedUser_db;
-- Drop weedUser database
USE weedUser_db;

-- Drop User Info table
DROP TABLE userInfo;

CREATE TABLE userInfo (name VARCHAR(20), userName VARCHAR(20), email VARCHAR(40),
age BOOLEAN);

INSERT INTO userInfo(name, userName, email, age) VALUES ("Maya Chisem", "mchisem","chisem.maya@gmail.com", true);

SELECT * FROM userInfo;
