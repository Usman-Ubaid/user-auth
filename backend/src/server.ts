import express from "express";
import cors from "cors";
import { myEnvVariables } from "./types/env";
import { connection } from "./db/dbConnection";
import { router } from "./routes/userRoutes";

const app = express();

connection();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

app.listen(myEnvVariables.PORT, () => {
  console.log(`server running on http://localhost:${myEnvVariables.PORT}`);
});
