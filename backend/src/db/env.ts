import { z } from "zod";
import * as dotenv from "dotenv";

dotenv.config();

const envVariables = z.object({
  PORT: z.string(),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
});

export const myEnvVariables = envVariables.parse(process.env);
