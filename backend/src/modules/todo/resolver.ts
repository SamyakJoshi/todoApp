import { Resolver, Arg, Query, Mutation, ID } from "type-graphql";
import { Service } from "typedi";
import { ObjectId } from "mongodb";

import { Todo } from "../../entities";
import TodoService from "./service";
import { finishTaskInput, NewTodoInput } from "./input";

/*
  IMPORTANT: Your business logic must be in the service!
*/

@Service() // Dependencies injection
@Resolver((of) => Todo)
export default class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query((returns) => Todo)
  async getTodo(@Arg("id") id: ObjectId) {
    const todo = await this.todoService.getById(id);

    return todo;
  }
  @Query((returns) => Todo)
  async getTodoList(@Arg("id") id: ObjectId) {
    const todo = await this.todoService.getById(id);

    return todo;
  }

  @Query((returns) => [Todo])
  async getAllTasks() {
    const Tasks = await this.todoService.getAllTasks();
    return Tasks;
  }

  @Query((returns) => [Todo])
  async getUserAssignedTasks(@Arg("id") id: ObjectId) {
    console.log(id)
    const Tasks = await this.todoService.getUserAssignedTasks(id);
    return Tasks;
  }

  @Mutation((returns) => Todo)
  async createTodo(
    @Arg("createTodoData") createTodoData: NewTodoInput
  ): Promise<Todo> {
    const todo = await this.todoService.addTodo(createTodoData);
    return todo;
  }

  @Mutation((returns) => Todo)
  async setTakDone(
    @Arg("setTakDone") task: finishTaskInput
  ): Promise<Todo | null> {
    const todo = await this.todoService.setTakDone(task);
    return todo;
  }

  @Mutation((returns) => Todo)
  async deleteTask(
    @Arg("taskToDelete") task: finishTaskInput
  ): Promise<Todo | null> {
    const todo = await this.todoService.deleteTask(task);
    return todo;
  }

  @Mutation((returns) => Todo)
  async shareTask(
    @Arg("taskToshare") task: finishTaskInput
  ): Promise<Todo | null> {
    const todo = await this.todoService.shareTask(task);
    return todo;
  }

}
