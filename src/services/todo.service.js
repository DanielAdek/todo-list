import AppDataSource from "../database/data-source";
import TodoEntity from "../entities/todo.entity";


export class TodoService {
  constructor() {
    this.repository = AppDataSource.getRepository(TodoEntity);
  }

  /**
   * 
   * @returns 
   */
  async getTodos() {
    return await this.repository.find();
  }

  /**
   * 
   * @param {*} payload 
   * @returns 
   */
  async createTodo(payload) {
    const todo = this.repository.create(payload);
    return await this.repository.save(todo);
  }
}