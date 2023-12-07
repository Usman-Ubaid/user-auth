import { Request } from "express";
import { ObjectId } from "mongodb";

export interface CustomRequest extends Request {
  user?: {
    _id: ObjectId;
    username: string;
    email: string;
  };
}
