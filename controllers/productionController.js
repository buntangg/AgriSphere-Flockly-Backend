import db from "../config/db.js";

// Fungsi untuk menambah laporan produksi
export const addProductionReport = (req, res) => {
  const { poultry_type, feed_price, daily_feed, egg_sales, meat_sales } =
    req.body;

  // Query untuk menambah data laporan produksi
  const query = `
    INSERT INTO production 
    (poultry_type, feed_price, daily_feed, egg_sales, meat_sales) 
    VALUES (?, ?, ?, ?, ?)`;

  db.query(
    query,
    [poultry_type, feed_price, daily_feed, egg_sales, meat_sales],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database error" });
      }
      res
        .status(201)
        .json({
          message: "Production report added successfully",
          reportId: result.insertId,
        });
    }
  );
};

// Fungsi untuk mendapatkan laporan produksi
export const getProductionReports = (req, res) => {
  const query = "SELECT * FROM production ORDER BY id DESC";

  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json(result);
  });
};

// Fungsi untuk mendapatkan data produksi
export const getProductionData = (req, res) => {
  // Simulasi data yang bisa kamu ambil dari database atau sumber lain
  const data = {
    poultry_type: "Chicken",
    total_egg_sales: 1500,
    total_meat_sales: 2000,
  };

  // Kirim data tersebut dalam respons
  res.status(200).json({ message: "Production data", data });
};
