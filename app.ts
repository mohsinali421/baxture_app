import app from "./index";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

let port = process.env.PORT;

let server = http.createServer(app);
  server.listen(port, () => {
    console.log("Worker started on port ", port);
  });