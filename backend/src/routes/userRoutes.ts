import express from "express";
import {
  loginUser,
  registerUser,
  dashboard,
} from "../controllers/userControllers";
import { protect } from "../middleware/authMiddleware";

export const router = express.Router();

router.post("/signin", loginUser);
router.post("/signup", registerUser);
router.get("/dashboard", protect, dashboard);
