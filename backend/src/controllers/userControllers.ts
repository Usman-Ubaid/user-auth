import { Request, Response } from "express";
import { getDbCollection } from "../db/dbConnection";
import { Credentials, NewUserCredentials, User } from "../types/user";
import { comparePasswords, generateJWT, hashPassword } from "../module/auth";
import { ObjectId } from "mongodb";
import { CustomRequest } from "../types/customRequest";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body as Credentials;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    } else {
      const user = (await getDbCollection().findOne({ email })) as User;

      if (user && (await comparePasswords(password, user.password))) {
        res.status(200).json({
          message: "success",
          user: {
            userId: user._id,
            username: user.username,
            email: user.email,
            token: generateJWT(user),
          },
        });
      } else {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body as NewUserCredentials;

    if (!username || !email || !password) {
      res.status(400).json({ message: "Please fill all the fields." });
    }

    const userExists = await getDbCollection().findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
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
      token: generateJWT(result),
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the user." });
  }
};


