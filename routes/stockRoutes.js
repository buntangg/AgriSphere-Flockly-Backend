import express from "express";
import { addStock, getStock } from "../controllers/stockController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authenticate, addStock); // Menambah stok
router.get("/", authenticate, getStock); // Mendapatkan laporan stok

export default router;
