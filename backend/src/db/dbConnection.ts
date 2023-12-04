import { MongoClient } from "mongodb";
import { myEnvVariables } from "./env";

export const client = new MongoClient(myEnvVariables.DATABASE_URL);

export const connection = async () => {
  try {
    await client.connect();
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

export const getDbCollection = () => {
  return client.db("user-auth").collection("users");
};
