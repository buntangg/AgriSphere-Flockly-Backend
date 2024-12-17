import db from "../config/db.js";

// Fungsi untuk menambah stok unggas
export const addStock = (req, res) => {
  const { date, poultry_type, quantity, egg_count, meat_count, description } =
    req.body;

  const query =
    "INSERT INTO stock (date, poultry_type, quantity, egg_count, meat_count, description) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    [date, poultry_type, quantity, egg_count, meat_count, description],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Database error" });
      res.status(201).json({ message: "Stock added successfully" });
    }
  );
};

// Fungsi untuk mendapatkan laporan stok unggas
export const getStock = (req, res) => {
  const query = "SELECT * FROM stock ORDER BY date DESC";
  db.query(query, (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.status(200).json(result);
  });
};
