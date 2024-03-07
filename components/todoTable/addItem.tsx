
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO, GET_TODOS } from "../../graphql";
import { addTodo } from "@/lib/actions/todo";

const AddItem=async()=> {

const reqBody={content: "task testing", description:"this task is for testing", assignee:"jaya patidar"}
const res=await addTodo(reqBody);

  return (
    <>
      {/* <div className=" m-4 flex justify-evenly shadow-xl p-6">
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
      )} */}
    </>
  );
};

export default AddItem;
