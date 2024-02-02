"use client";
import { gql, useQuery } from "@apollo/client";
import ToDoItem from "./todoItem";
import AddItem from "./addItem";

export interface ITodo {
  title: string;
  is_public: boolean;
  is_completed: boolean;
  id: number;
  created_at: string;
}

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

function TodoTable() {
  const { loading } = useQuery(getTodos);

  return (
    <>
      {loading ? (
        <span>Loading</span>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <AddItem />
            <ToDoItem />
          </div>
        </>
      )}
    </>
  );
}

export default TodoTable;
