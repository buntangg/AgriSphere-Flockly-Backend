CREATE DATABASE flockly_db;

USE flockly_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  phone_number VARCHAR(15),
  role ENUM('user', 'admin') DEFAULT 'user'
);

CREATE TABLE user_profile (
  user_id INT,
  name VARCHAR(255),
  gender ENUM('male', 'female', 'other'),
  timezone VARCHAR(255),
  address TEXT,
  city VARCHAR(255),
  district VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE stock (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date DATE,
  poultry_type ENUM('chicken', 'duck', 'quail'),
  quantity INT,
  egg_count INT,
  meat_count INT,
  description TEXT
);

CREATE TABLE production (
  id INT AUTO_INCREMENT PRIMARY KEY,
  poultry_type ENUM('chicken', 'duck', 'quail'),
  feed_price DECIMAL(10, 2),
  daily_feed INT,
  egg_sales INT,
  meat_sales INT
);

CREATE TABLE schedule (
  id INT AUTO_INCREMENT PRIMARY KEY,
  poultry_type ENUM('chicken', 'duck', 'quail'),
  feed_schedule TEXT,
  health_check_schedule TEXT,
  vaccination_schedule TEXT,
  cage_maintenance_schedule TEXT
);
