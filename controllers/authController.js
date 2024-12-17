import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/db.js";

// Fungsi registrasi pengguna
export const registerUser = (req, res) => {
  // Fungsi registrasi pengguna
  const { email, username, password, phone_number } = req.body;

  if (!email || !username || !password || !phone_number) {
    return res.status(400).json({ error: "Email and password are required" });

  };
  
  db.query(
    "SELECT * FROM users WHERE email = ? OR username = ?",
    [email, username],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Database error" });
      if (result.length > 0)
        return res
          .status(400)
          .json({ message: "Email atau Username sudah terdaftar" });

      const hashedPassword = bcrypt.hashSync(password, 10);

      db.query(
        "INSERT INTO users (email, username, password, phone_number) VALUES (?, ?, ?, ?)",
        [email, username, hashedPassword, phone_number],
        (err, result) => {
          if (err) return res.status(500).json({ message: "Database error" });
          res.status(201).json({ message: "User registered successfully" });
        }
      );
    }
  );
};

export const loginUser = (req, res) => {
  const { username, password } = req.body;
  

  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Database error" });
      if (result.length === 0)
        return res.status(400).json({ message: "User not found" });

      const user = result[0];
      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid)
        return res.status(401).json({ message: "Invalid password" });

      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({ message: "Login successful", token });
    }
  );
};
