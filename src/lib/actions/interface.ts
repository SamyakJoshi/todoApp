export interface AddTodoReqBody {
  content: string;
  assignee: string;
  description: string;
}

export interface AddTodoResponseDetail {
  assignee: string;
  content: string;
  description: string;
  _id: string;
  createdAt: string;
  isDone: boolean;
  sharedUsers: string;
  startTime: string;
  updatedAt: string;
}

export interface AddTodoResponse {
  createTodo: AddTodoResponseDetail;
}
