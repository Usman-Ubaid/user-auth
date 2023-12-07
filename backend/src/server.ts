import express from "express";
import { myEnvVariables } from "./types/env";
import { connection } from "./db/dbConnection";
import { router } from "./routes/userRoutes";

const app = express();

connection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(myEnvVariables.PORT, () => {
  console.log(`server running on http://localhost:${myEnvVariables.PORT}`);
});
