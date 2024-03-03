"use client";
import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import Modal from "react-modal";
import { ADD_USER, GET_USERS } from "../../../graphql";

interface User {
  _id: string;
  username: string;
  email: string;
}

const UserList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  const [addUser] = useMutation(ADD_USER);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const users: User[] = data.getUsers;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addUser({
        variables: {
          username: formData.username,
          password: formData.password,
          email: formData.email,
        },
        refetchQueries: [{ query: GET_USERS }],
      });
      setFormData({ username: "", password: "", email: "" });
      //  refetch(); // Refresh the user list after adding a new user
      closeModal(); // Close the modal after adding a new user
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto bg-gray-100 p-4 rounded-md shadow-md my-4 flex">
        <button
          onClick={openModal}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-auto"
        >
          Add User
        </button>
      </div>
      <div className="max-w-lg mx-auto bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Users</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user._id}
              className="border-b py-4 flex items-center justify-between"
            >
              <div>
                <p className="text-lg font-semibold">
                  User Name : {user.username}
                </p>
                <p className="text-gray-600">User Email :{user.email}</p>
              </div>
              {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                View Profile
              </button> */}
            </li>
          ))}
        </ul>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        {/* Modal Container */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Add User</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-4"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-4"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-4"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Add User
            </button>
            <button
              className="bg-slate-200  py-2 px-4 rounded mx-2"
              onClick={closeModal}
            >
              cancle
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default UserList;
