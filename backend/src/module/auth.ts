import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { myEnvVariables } from "../db/env";
import { ObjectId } from "mongodb";

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
