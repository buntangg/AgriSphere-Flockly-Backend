CREATE DATABASE flockly_db;
USE flockly_db;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(15) NOT NULL
);
CREATE TABLE user_profile (
  user_id INT PRIMARY KEY,
  name VARCHAR(255),
  gender VARCHAR(10),
  timezone VARCHAR(50),
  address TEXT,
  city VARCHAR(100),
  district VARCHAR(100),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE stock (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date DATE NOT NULL,
  poultry_type VARCHAR(50) NOT NULL,
  quantity INT NOT NULL,
  egg_count INT NOT NULL,
  meat_count INT NOT NULL,
  description TEXT
);
CREATE TABLE production (
  id INT AUTO_INCREMENT PRIMARY KEY,
  poultry_type VARCHAR(50) NOT NULL,
  feed_price DECIMAL(10, 2) NOT NULL,
  daily_feed DECIMAL(10, 2) NOT NULL,
  egg_sales DECIMAL(10, 2) NOT NULL,
  meat_sales DECIMAL(10, 2) NOT NULL
);
CREATE TABLE schedule (
  id INT AUTO_INCREMENT PRIMARY KEY,
  poultry_type VARCHAR(50) NOT NULL,
  feed_schedule DATE,
  health_check_schedule DATE,
  vaccination_schedule DATE,
  cage_maintenance_schedule DATE
);





