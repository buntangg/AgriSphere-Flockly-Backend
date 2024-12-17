import db from "../config/db.js";

// Fungsi untuk mendapatkan profil pengguna
export const getUserProfile = (req, res) => {
  const { userId } = req.params;

  // Query untuk mengambil profil pengguna
  db.query(
    "SELECT * FROM user_profile WHERE user_id = ?",
    [userId],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Database error" });
      if (result.length === 0)
        return res.status(404).json({ message: "Profile not found" });

      res.status(200).json(result[0]); // Kirim profil pengguna
    }
  );
};

// Fungsi untuk memperbarui profil pengguna
export const updateUserProfile = (req, res) => {
  const { name, gender, timezone, address, city, district } = req.body;
  const { userId } = req.params; // Menggunakan userId dari parameter URL

  // Query untuk memperbarui profil pengguna
  const query = `
    UPDATE user_profile 
    SET name = ?, gender = ?, timezone = ?, address = ?, city = ?, district = ? 
    WHERE user_id = ?
  `;
  db.query(
    query,
    [name, gender, timezone, address, city, district, userId],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Database error" });
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Profile not found" });

      res.status(200).json({ message: "Profile updated successfully" });
    }
  );
};
