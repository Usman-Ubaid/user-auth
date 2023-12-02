import express from "express";
import { myEnvVariables } from "./helpers/env";
import { connection } from "./helpers/dbConnection";

const app = express();

connection();

app.listen(myEnvVariables.PORT, () => {
  console.log(`server running on http://localhost:${myEnvVariables.PORT}`);
});
