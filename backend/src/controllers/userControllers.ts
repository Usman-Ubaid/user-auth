import { Request, Response } from "express";
import { getDbCollection } from "../db/dbConnection";
import { User } from "./types/User";
import { hashPassword } from "../module/auth";

export const userSignin = (req: Request, res: Response) => {
  res.json({ message: "User Sign in" });
};

export const userSignup = async (req: Request, res: Response) => {
  try {
    const { username, email, password }: User = req.body;

    if (!username || !email || !password) {
      res.status(400).json({ message: "Please fill all the fields." });
    } else {
      const user = { username, email, password: await hashPassword(password) };
      const collection = getDbCollection();
      const result = await collection.insertOne(user);

      res.json({ message: user, result });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the user." });
  }
};
