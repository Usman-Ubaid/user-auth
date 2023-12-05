import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, saltRounds);
};

export const comparePasswords = (userPassword: string, dbPassword: string) => {
  return bcrypt.compare(userPassword, dbPassword);
};
