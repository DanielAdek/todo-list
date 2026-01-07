import express from "express";
import AppDataSource from "./database/data-source.js";
import todoRoutes from "./routes/todo.route.js";

const app = express();

app.use(express.json());

const healthData = {
  status: 'ok',
  timestamp: new Date().toISOString(),
  uptime: process.uptime(),
  service: 'webhook-service',
};

app.get("/health", (_, res) => res.status(200).json(healthData))

app.get("/", (_, res) => res.status(200).send("Todo App - Version 3"));

// Routes
app.use("/api/todos", todoRoutes);

(async function () {
  try {
    await AppDataSource.initialize();
    console.log("Database connected!");
  } catch (error) {
    console.log(error.message);
  }
})();

app.listen(8080, () => console.log("Server on 8080"));