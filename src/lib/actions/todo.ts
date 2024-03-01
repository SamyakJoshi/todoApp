import { fetchGraphQl } from "..";
import { ADD_TODO, GET_TODOS } from "../../../graphql"
import { AddTodoReqBody, AddTodoResponse } from "./interface";

export const getTodo = async () => {
    try {
        const res = await fetchGraphQl({ query:GET_TODOS });
        return res?.data.getAllTasks;
    }catch(error){
        console.log(error)
    }
};

export const addTodo = async (reqBody: AddTodoReqBody): Promise<AddTodoResponse> => {
    try {
        const res = await fetchGraphQl({ query: ADD_TODO, variables: reqBody })
        return res;
    } catch (error) {
        console.log(error)
        throw new Error('Failed to add todo: ' + error);
    }
};
