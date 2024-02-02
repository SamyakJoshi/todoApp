import { gql, useQuery } from "@apollo/client";
import { ITodo } from "./page";
import { table } from "console";

const getTodos = gql`
  query {
    todos {
      title
      is_public
      is_completed
      id
      created_at
    }
  }
`;
function ToDoItem() {
  const { data } = useQuery(getTodos);
  const value: ITodo[] = data?.todos;
  return (
    <>
      <div className="">
        {value?.map((item) => (
          <tr className="border-solid  shadow-xl">
            <td className="p-2">{item.id}</td>
            <td className="p-2 ">{item.title}</td>
            <td className="p-2">{item.created_at}</td>
            <td className="p-2">{item.is_completed}</td>
            <td className="p-2">{item.is_public}</td>
            <td className="p-2 ">
              <img src="assets/edit.svg" />
            </td>
            <td className="p-2 ">
              <img src="assets/delete.svg" />
            </td>
          </tr>
        ))}
      </div>
    </>
  );
}

export default ToDoItem;
