import { ADD_TODO, GET_TODOS } from '@/graphql';
import { fetchGraphQl, IRequestBody } from '..';
import {
  IAddTodoReqBody,
  IAddTodoResponse,
  IAddTodoResponseDetail, IBaseGraphqlResponse,
} from './interface';

interface ITaskData {
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

interface IAllTaskData {
  getAllTasks: ITaskData[];
}

// To fetch all
export const getTodo = async (): Promise<ITaskData[]> => {
  const res = await fetchGraphQl<IRequestBody, IBaseGraphqlResponse<IAllTaskData>>(
    { query: GET_TODOS },
  );
  return res.data.getAllTasks;
};

// To add new TODO
export const addTodo = async (
  reqBody: IAddTodoReqBody,
): Promise<IAddTodoResponseDetail> => {
  const res = await fetchGraphQl<
    IAddTodoReqBody,
    IBaseGraphqlResponse<IAddTodoResponse>
  >({ query: ADD_TODO, variables: reqBody });
  return res.data.createTodo;
};
