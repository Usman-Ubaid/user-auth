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
