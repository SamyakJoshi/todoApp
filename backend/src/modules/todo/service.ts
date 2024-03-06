import { Service } from 'typedi';
import { ObjectId } from 'mongoose';

import TodoModel from './model';
import { Todo } from '../../entities';
import { finishTaskInput, NewTodoInput } from './input';

@Service()
export default class TodoService {
  public async shareTask(task: finishTaskInput): Promise<Todo | null> {
    // let canDelete = await this.todoModel.getById(task);
    const newTodo = await this.todoModel.shareTask(task);
    return newTodo;
  }

  public async deleteTask(task: finishTaskInput): Promise<Todo | null> {
    // let canDelete = await this.todoModel.getById(task);
    const newTodo = await this.todoModel.deleteTask(task);
    return newTodo;
  }
  getUserAssignedTasks(_id: ObjectId): Promise<Todo[] | null> {
    return this.todoModel.getUserAssignedTasks(_id);
  }
  constructor(private readonly todoModel: TodoModel) {}

  //get task by id
  public async getById(_id: ObjectId): Promise<Todo | null> {
    return this.todoModel.getById(_id);
  }

  public async getiWithoutId(): Promise<Todo[] | null> {
    return this.todoModel.getWithoutId();
  }

  public async getAllTasks(): Promise<Todo[] | null> {
    return this.todoModel.getAllTasks();
  }
  public async addTodo(data: NewTodoInput): Promise<Todo> {
    const newTodo = await this.todoModel.create(data);
    return newTodo;
  }
  public async setTakDone(data: finishTaskInput): Promise<Todo | null> {
    const newTodo = await this.todoModel.setTaskdone(data);
    return newTodo;
  }
}
