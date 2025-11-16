import { TodoService } from "../services/todo.service";

export class TodoController {
 /**
  *
  */
 constructor() {
  this.service = new TodoService();

  this.getTodosAsync = this.getTodosAsync.bind(this);
  this.createTodoAsync = this.createTodoAsync.bind(this);
 }

  /**
  *
  * @param {*} req
  * @param {*} res
  * @returns
  */
 async createTodoAsync(req, res) {
  try {
    const todo = await this.service.createTodo(req.body);
    return res.status(201).json(todo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
 }

 /**
  *
  * @param {*} req
  * @param {*} res
  * @returns
  */
 async getTodosAsync(req, res) {
  try {
    const todos = await this.service.getTodos();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
 }
}