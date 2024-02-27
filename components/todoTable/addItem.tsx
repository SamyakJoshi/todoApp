"use client";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO, GET_TODOS } from "../../graphql";

function AddItem() {
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [description, setDescription] = useState("");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [addTodo] = useMutation(ADD_TODO, {
    variables: { content: title, description, assignee },
    refetchQueries: [{ query: GET_TODOS }],
  });

  const handleSubmit = async () => {
    try {
      const { data } = await addTodo();

      console.log("Todo added:", data.insert_todos_one);
    } catch (error) {
      console.log("Error adding todo:");
    }

    // Resetting the data.
    setTitle("");
    setAssignee("");
    setDescription("");
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
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-white-50  w-full border-gray-300 rounded-xl p-2 mb-3"
              placeholder="Enter description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Assignee Name:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-white-50  w-full border-gray-300 rounded-xl p-2 mb-3"
              placeholder="Enter your name"
              required
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            />
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
