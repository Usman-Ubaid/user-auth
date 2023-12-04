import express from "express";
import { userSignin, userSignup } from "../controllers/userControllers";

export const router = express.Router();

router.get("/signin", userSignin);
router.post("/signup", userSignup);
