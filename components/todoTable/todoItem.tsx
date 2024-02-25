import { gql, useQuery } from "@apollo/client";
import ShowTodo from "./todoTable";
import { GET_TODOS } from "../../graphql";
import { ITodo } from "../../types";

function ToDoItem() {
  const { data, error } = useQuery(GET_TODOS);
  const value: ITodo[] = data?.getAllTasks;

  if (error) return `Error! ${error.message}`;
  return (
    <>
      <div className="">
        <tr className="border-solid  shadow-xl">
          <td className="p-4">Id</td>
          <td className="p-4 ">Content</td>
          <td className="p-4">Description</td>
          <td className="p-4">Assignee</td>
          <td className="p-4">Is done</td>
          <td className="p-4">Actions</td>
        </tr>
        {value?.map((item, index) => (
          <ShowTodo item={item} index={index} />
        ))}
      </div>
    </>
  );
}

export default ToDoItem;
