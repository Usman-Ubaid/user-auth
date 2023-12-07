import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { myEnvVariables } from "../db/env";

const saltRounds = 10;

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, saltRounds);
};

export const comparePasswords = (userPassword: string, dbPassword: string) => {
  return bcrypt.compare(userPassword, dbPassword);
};

export const generateJWT = (user: Object) => {
  return jwt.sign({ user }, myEnvVariables.JWT_SECRET);
};

export const verifyJWT = (token: string) => {
  try {
    const decode = jwt.verify(token, myEnvVariables.JWT_SECRET);
    return { payload: decode };
  } catch (error) {
    return { payload: null };
  }
};
