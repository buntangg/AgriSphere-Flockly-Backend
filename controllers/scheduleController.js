// controllers/scheduleController.js
import db from "../config/db.js";

// Fungsi untuk menambah jadwal perawatan unggas
export const addSchedule = (req, res) => {
  const {
    poultry_type,
    feed_schedule,
    health_check_schedule,
    vaccination_schedule,
    cage_maintenance_schedule,
  } = req.body;

  const query =
    "INSERT INTO schedule (poultry_type, feed_schedule, health_check_schedule, vaccination_schedule, cage_maintenance_schedule) VALUES (?, ?, ?, ?, ?)";
  db.query(
    query,
    [
      poultry_type,
      feed_schedule,
      health_check_schedule,
      vaccination_schedule,
      cage_maintenance_schedule,
    ],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Database error" });
      res.status(201).json({ message: "Schedule added successfully" });
    }
  );
};

// Fungsi untuk mendapatkan jadwal perawatan unggas
export const getSchedules = (req, res) => {
  const query = "SELECT * FROM schedule ORDER BY id DESC";
  db.query(query, (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.status(200).json(result);
  });
};
