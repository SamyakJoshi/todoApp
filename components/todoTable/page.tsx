"use client";
import { gql, useQuery } from "@apollo/client";
import ToDoItem from "./todoItem";
import AddTodo from "./addItem";
import { GET_TODOS } from "../../graphql";



function TodoTable() {
  const { loading } = useQuery(GET_TODOS);

  return (
    <>
      {loading ? (
        <span>Loading</span>
      ) : (
        <>
          <div className="flex flex-col items-center bg-gradientBackground h-screen">
            <AddTodo />
            <ToDoItem />
          </div>
        </>
      )}
    </>
  );
}

export default TodoTable;
