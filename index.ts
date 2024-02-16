import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { router } from "./routes/user";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DATABASE;

app.use(express.json()); // for parsing application/json

app.use("/api", router);

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@production.goiveu9.mongodb.net/${database}?retryWrites=true&w=majority`,
      {}
    );
    console.log(`MongoDB Connected...`);
    // app.listen(port, () => {
    //   console.log(`Server running at ${port}...`);
    //   console.log(`PID ${process.pid}...`);
    // });
  } catch (error: any) {
    console.error(error.message);
  }
};
connectDB();

export default app;
