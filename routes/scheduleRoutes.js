import express from "express";
import {
  addSchedule,
  getSchedules,
} from "../controllers/scheduleController.js"; // Pastikan controller sudah ada
import { authenticate } from "../middlewares/authMiddleware.js"; // Pastikan middleware sudah ada

const router = express.Router();

router.post("/", authenticate, addSchedule); // Menambahkan jadwal
router.get("/", authenticate, getSchedules); // Mendapatkan jadwal

export default router;
