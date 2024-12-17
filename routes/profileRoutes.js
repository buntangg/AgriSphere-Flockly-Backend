import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/profileController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Gunakan middleware "authenticate" sesuai ekspor dari authMiddleware.js
router.get("/:userId", authenticate, getUserProfile);
router.put("/:userId", authenticate, updateUserProfile);

export default router;
