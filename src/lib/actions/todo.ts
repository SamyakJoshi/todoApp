import { fetchGraphQl } from "..";
import { GET_TODOS } from "../../../graphql"

export const getTodo = async () => {
    try {
        const res = await fetchGraphQl({ query:GET_TODOS });
        return res?.data.getAllTasks;
    }catch(error){
        console.log(error)
    }
};
