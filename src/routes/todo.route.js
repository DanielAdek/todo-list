import { Router } from "express";
import { TodoController } from "../controllers/todo.controller.js";

const router = Router();
const controller = new TodoController();

/**
 * @route GET /api/todos
 * @description Get all todos
 */
router.get("/", controller.getTodosAsync);

/**
 * @route POST /api/todos
 * @description Create a new todo
 */
router.post("/", controller.createTodoAsync);

export default router;
