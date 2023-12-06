import express from "express";
import { userSignin, registerUser } from "../controllers/userControllers";

export const router = express.Router();

router.post("/signin", userSignin);
router.post("/signup", registerUser);
