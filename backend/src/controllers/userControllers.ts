import { Request, Response } from "express";

export const userSignin = (req: Request, res: Response) => {
  res.json({ message: "User Sign in" });
};

export const userSignup = (req: Request, res: Response) => {
  res.json({ message: "User Sign up" });
};
