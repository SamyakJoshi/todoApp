import { fetchGraphQl, type RequestBody } from '..';
import { ADD_TODO, GET_TODOS } from '../../graphql';
import {
  type AddTodoReqBody,
  type AddTodoResponse,
  type AddTodoResponseDetail, type BaseGraphqlResponse,
} from './interface';

interface TaskData {
  _id: string;
  assignee: string;
  content: string;
  createdAt: string;
  description: string;
  isDone: boolean;
  sharedUsers: string;
  startTime: string;
  updatedAt: string;
}

interface AllTaskData {
  getAllTasks: TaskData[];
}

// To fetch all
export const getTodo = async (): Promise<TaskData[]> => {
  const res = await fetchGraphQl<RequestBody, BaseGraphqlResponse<AllTaskData>>(
    { query: GET_TODOS },
  );
  return res.data.getAllTasks;
};

// To add new TODO
export const addTodo = async (
  reqBody: AddTodoReqBody,
): Promise<AddTodoResponseDetail> => {
  const res = await fetchGraphQl<
    AddTodoReqBody,
    BaseGraphqlResponse<AddTodoResponse>
  >({ query: ADD_TODO, variables: reqBody });
  return res.data.createTodo;
};
