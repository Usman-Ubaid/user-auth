import { MongoClient } from "mongodb";
import { myEnvVariables } from "./env";

export const connection = async () => {
  try {
    const client = new MongoClient(myEnvVariables.DATABASE_URL);
    await client.connect();
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};
