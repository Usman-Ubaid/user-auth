import express from "express";
import { myEnvVariables } from "./db/env";
import { connection } from "./db/dbConnection";

const app = express();

connection();

app.listen(myEnvVariables.PORT, () => {
  console.log(`server running on http://localhost:${myEnvVariables.PORT}`);
});
