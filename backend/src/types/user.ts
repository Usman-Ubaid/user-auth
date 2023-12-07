import { ObjectId } from "mongodb";

export interface Credentials {
  email: string;
  password: string;
}

export interface NewUserCredentials extends Credentials {
  username: string;
}

export interface User extends NewUserCredentials {
  _id: ObjectId;
}

export interface RequestUser {
  _id: ObjectId;
  username: string;
  email: string;
}

export interface SelectedUser
  extends Pick<User, "_id" | "username" | "email"> {}
