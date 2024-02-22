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
      <button
        onClick={() => setIsOpen(true)}
        className=" m-4 p-4 bg-button w-40 hover:bg-hoverButton rounded-md text-typography"
      >
        Add Task
      </button>

      {isOpen && (
        <div className="bg-primary w-6/12 p-5 rounded-lg">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-typography"
            >
              Todo Name:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-white-50  w-full border-border rounded-xl p-2 mb-3"
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
                className="w-4 h-4 text-typography bg-primary border-border rounded checked:bg-button  focus:secondary"
              />
              <label className="ms-2 text-sm font-medium text-typography">
                Is Completed
              </label>
            </div>
          </div>
          <div className="flex">
            <button
              onClick={() => setIsOpen(false)}
              className="m-2 w-6/12 text-typography bg-button hover:bg-hoverButton focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                handleSubmit();
              }}
              type="submit"
              className="m-2 w-6/12 text-typography bg-button hover:bg-hoverButton focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
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
