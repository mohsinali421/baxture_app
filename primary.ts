import cluster from "cluster";
import os from "os";
import dotenv from "dotenv";
import app from "./index";
import http from "http";

dotenv.config();

const parallelism: number = os.availableParallelism()
let port = process.env.PORT;
app.set("port", port);

if (cluster.isPrimary) {
  console.log("Master process ", process.pid);
  for (let i = 0; i < parallelism - 1; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker ID=${worker.id} PID=${worker.process.pid} has been killed`
    );
    console.log("Starting another worker...");
    cluster.fork();
  });
} else {
  console.log("Worker ", process.pid);
  let server = http.createServer(app);
  server.listen(port, () => {
    console.log("Worker started on port ", port);
  });
  console.log("Worker");
}
