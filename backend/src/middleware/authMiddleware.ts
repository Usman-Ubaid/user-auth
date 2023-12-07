import { Request, Response, NextFunction } from "express";
import { verifyJWT } from "../module/auth";
import { CustomRequest } from "../types/customRequest";

export const protect = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    return res.status(401).json({ message: "No Bearer Token found" });
  }

  const [_, token] = bearer.split(" ");

  if (!token) {
    return res.status(401).json({ message: "No Token found" });
  }

  try {
    const payload = verifyJWT(token);

    req.user = {
      _id: payload.user._id,
      username: payload.user.username,
      email: payload.user.email,
    };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not Authorized" });
  }
};
