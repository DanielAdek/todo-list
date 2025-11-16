import express from "express";
import AppDataSource from "./database/data-source.js";
import todoRoutes from "./routes/todo.route.js";

const app = express();

app.use(express.json());

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