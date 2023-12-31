import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { myEnvVariables } from "../types/env";

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
  const decode = jwt.verify(token, myEnvVariables.JWT_SECRET);
  return decode as JwtPayload;
};
