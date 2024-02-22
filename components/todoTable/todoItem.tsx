import { gql, useQuery } from "@apollo/client";
import { ITodo } from "./page";

const getTodos = gql`
  query {
    getAllTasks {
      _id
      createdAt
      updatedAt
      content
      description
      isDone
      assignee
      sharedUsers
    }
  }
`;
function ToDoItem() {
  const { data } = useQuery(getTodos);
  const value: ITodo[] = data.getAllTasks;

  return (
    <>
      <div className="border-solid  shadow-2xl p-4">
        {value?.map((item: ITodo) => (
          <div>
            <h2 className="font-bold">{item.content}</h2>
            <span className="text-base">{item.description}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default ToDoItem;
