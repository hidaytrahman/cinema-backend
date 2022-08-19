import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import DBConnect from "./config/connection";
import Routes from "./api/Routes/";

dotenv.config();

const app: Express = express();

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

Routes(app);

// connect DB
DBConnect();

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
