import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { myEnvVariables } from "../db/env";
import { getDbCollection } from "../db/dbConnection";

interface CustomRequest extends Request {
  user: string | jwt.JwtPayload | undefined;
}

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    return res.status(401).json({ message: "No Bearer Token found" });
  }

  const [_, token] = bearer.split(" ");

  if (!token) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  try {
    const user = jwt.verify(token, myEnvVariables.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid" });
      }
      if (user) {
        (req as CustomRequest).user = user;
      }
    });
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not Authorized" });
  }
};
