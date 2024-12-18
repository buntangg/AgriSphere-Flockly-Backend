import mysql from "mysql2";

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost", 
  user: process.env.DB_USER || "root", 
  password: process.env.DB_PASSWORD || "", 
  database: process.env.DB_NAME || "flockly_db", 
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err.stack);
    return;
  }
  console.log("Connected to database as ID", db.threadId);
});

export default db;
