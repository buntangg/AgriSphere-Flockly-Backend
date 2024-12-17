import express from "express";
import {
  addProductionReport,
  getProductionReports,
  getProductionData,
} from "../controllers/productionController.js"; // Pastikan yang ini benar

const router = express.Router();

router.post("/report", addProductionReport); // Menambahkan laporan produksi
router.get("/reports", getProductionReports); // Mendapatkan semua laporan produksi
router.get("/data", getProductionData); // Mendapatkan data produksi

export default router;
