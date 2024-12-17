import mysql from "mysql2";

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost", // Ganti dengan alamat host MySQL kamu
  user: process.env.DB_USER || "root", // Ganti dengan username MySQL kamu
  password: process.env.DB_PASSWORD || "", // Ganti dengan password MySQL kamu
  database: process.env.DB_NAME || "flockly_db", // Nama database yang kamu buat sebelumnya
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err.stack);
    return;
  }
  console.log("Connected to database as ID", db.threadId);
});

export default db;
