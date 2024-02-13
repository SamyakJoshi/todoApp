"use client";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "graphql-tag";

// const ADD_TODO = gql`
//   mutation AddTodo($title: String!, $is_public: Boolean!) {
//     insert_todos_one(object: { title: $title, is_public: $is_public }) {
//       id
//       title
//       is_completed
//     }
//   }
// `;

const ADD_TODO = gql`
  mutation AddTodo($is_public: Boolean!, $title: String!) {
    insert_todos(objects: { is_public: $is_public, title: $title }) {
      affected_rows
    }
  }
`;

function AddItem() {
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [is_public, setIs_public] = useState(false);

  const [addTodo] = useMutation(ADD_TODO, {
    variables: { title: title, is_public: is_public },
  });

  const handleSubmit = async () => {
    const newTodo = { title, is_public };
    console.log("New Todo:", newTodo);

    try {
      const { data } = await addTodo();

      console.log("Todo added:", data.insert_todos_one);
    } catch (error) {
      console.log("Error adding todo:");
    }

    // Resetting the data.
    setTitle("");
    setIs_public(false);
  };

  return (
    <>
      <div className=" m-4 flex justify-evenly shadow-xl p-6">
        <button
          onClick={() => setIsOpen(true)}
          className=" p-4 bg-gradient-to-l from-cyan-500 to-blue-500 w-60 rounded-md "
        >
          Add Task
        </button>
      </div>

      {isOpen && (
        <div className="bg-indigo-500 w-6/12 p-5 rounded-lg">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Todo Name:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-white-50  w-full border-gray-300 rounded-xl p-2 mb-3"
              placeholder="Enter todo name"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                checked={is_public}
                onChange={(e) => setIs_public(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ms-2 text-sm font-medium text-white">
                Is Completed
              </label>
            </div>
          </div>
          <div className="flex">
            <button
              onClick={() => setIsOpen(false)}
              className="m-2 w-6/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                handleSubmit();
              }}
              type="submit"
              className="m-2 w-6/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Todo
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddItem;
