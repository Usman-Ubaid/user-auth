import { Request, Response } from "express";
import { getDbCollection } from "../db/dbConnection";
import { User } from "./types/User";
import { hashPassword } from "../module/auth";

export const userSignin = (req: Request, res: Response) => {
  res.json({ message: "User Sign in" });
};

export const userSignup = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body as User;

    if (!username || !email || !password) {
      res.status(400).json({ message: "Please fill all the fields." });
    }

    const userExists = await getDbCollection().findOne({ email });

    if (userExists) {
      res.status(400).json({ message: "User already exists" });
    }

    const user = {
      username,
      email,
      password: await hashPassword(password),
      createdAt: new Date().toISOString(),
    };
    const result = await getDbCollection().insertOne(user);

    res.status(201).json({
      message: "User created successfully",
      userId: result.insertedId,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the user." });
  }
};
