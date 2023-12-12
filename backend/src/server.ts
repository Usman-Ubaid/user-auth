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
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Replace with your Vercel app URL
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});
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
