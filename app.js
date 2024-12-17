import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import stockRoutes from "./routes/stockRoutes.js";
import productionRoutes from "./routes/productionRoutes.js";
import scheduleRoutes from "./routes/scheduleRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/production", productionRoutes);
app.use("/api/schedule", scheduleRoutes);


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
