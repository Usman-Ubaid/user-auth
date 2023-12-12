import express from "express";
import { protect } from "../middleware/authMiddleware";
import { dashboard } from "../controllers/dashboard";

export const router = express.Router();

router.get("/dashboard", protect, dashboard);
