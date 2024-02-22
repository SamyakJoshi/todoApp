"use client";
import { gql, useQuery } from "@apollo/client";
import ToDoItem from "./todoItem";
import AddTodo from "./addItem";
import CommonButton from "../button";

export interface ITodo {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  description: string;
  isDone: boolean;
  assignee: string;
  startTime: Date;
  sharedUsers: string;
}

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

function TodoTable() {
  const { loading } = useQuery(getTodos);

  return (
    <>
      {loading ? (
        <span>Loading</span>
      ) : (
        <>
          <div className="flex flex-col items-center">
            {/* <AddTodo />
            <ToDoItem /> */}

            <CommonButton variant={"outlined"} size={"medium"} type={"icon"}>
              {/* New Category */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="edit"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
              </svg>
            </CommonButton>
          </div>
        </>
      )}
    </>
  );
}

export default TodoTable;
