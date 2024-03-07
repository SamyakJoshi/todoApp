import { IRequestBody, IRequestBodyWithVariable, fetchGraphQl } from "..";
import { ADD_TODO, GET_TODOS } from "../../../graphql"
import { AddTodoReqBody, AddTodoResponse, AddTodoResponseDetail } from "./interface";

//Baser Response Interface
interface IBaseGraphqlResponse<T = unknown> {
    data: T
};

interface ITaskData {
    _id: string
    assignee: string
    content: string
    createdAt: string
    description: string
    isDone: boolean
    sharedUsers: string
    startTime: string
    updatedAt: string
}

interface IAllTaskData {
    getAllTasks: ITaskData[];
}

export const getTodo = async (): Promise<ITaskData[]> => {
    try {
        const res = await fetchGraphQl<IRequestBody, IBaseGraphqlResponse<IAllTaskData>>({ query: GET_TODOS });
        return res.data.getAllTasks;
    }catch(error){
        console.log(error)
        throw new Error('Failed to Fetch data');
    }
};



export const addTodo = async (reqBody: AddTodoReqBody): Promise<AddTodoResponseDetail> => {
    try {
        const res = await fetchGraphQl<AddTodoReqBody, IBaseGraphqlResponse<AddTodoResponse>>({ query: ADD_TODO, variables: reqBody })
        return res.data.createTodo;
    } catch (error) {
        console.log(error)
        throw new Error('Failed to add todo: ' + error);
    }
};
