import express from "express";
import cors from "cors";
import { myEnvVariables } from "./types/env";
import { connection } from "./db/dbConnection";
import { router as userRouter } from "./routes/userRoutes";
import { router as dashboardRouter } from "./routes/dashboardRoute";

const app = express();

connection();

app.use(
  cors({
    origin: "*",
    methods: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRouter);
app.use("/api", dashboardRouter);

app.get("/", (req, res) => {
  res.send("Hello from Server");
});

app.listen(myEnvVariables.PORT, () => {
  console.log(`server running on PORT:${myEnvVariables.PORT}`);
});
