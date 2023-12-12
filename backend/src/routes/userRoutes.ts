import express from "express";
import { loginUser, registerUser } from "../controllers/userControllers";

export const router = express.Router();

router.post("/signin", loginUser);
router.post("/signup", registerUser);
