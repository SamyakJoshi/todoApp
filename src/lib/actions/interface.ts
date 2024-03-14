export interface IAddTodoReqBody {
  content: string;
  assignee: string;
  description: string;
}

export interface IAddTodoResponseDetail {
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

export interface IAddTodoResponse {
  createTodo: IAddTodoResponseDetail;
}

export interface IBaseGraphqlResponse<T = unknown> {
  data: T;
}
