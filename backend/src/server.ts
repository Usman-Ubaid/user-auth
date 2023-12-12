import express from "express";
import cors from "cors";
import { myEnvVariables } from "./types/env";
import { connection } from "./db/dbConnection";
import { router as userRouter } from "./routes/userRoutes";
import { router as dashboardRouter } from "./routes/dashboardRoute";

const app = express();

const port = myEnvVariables.PORT || 5000;

connection();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", userRouter);
app.use("/api", dashboardRouter);

app.get("/", (req, res) => {
  res.send("Hello from Server");
});

app.listen(port, () => {
  console.log(`server running on PORT: http://localhost:${port}`);
});
