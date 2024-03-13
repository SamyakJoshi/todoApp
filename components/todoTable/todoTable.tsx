import React from 'react';
import { useMutation } from '@apollo/client';
import Image from 'next/image';
import { SET_TASK_DONE, GET_TODOS, DELETE_TASK } from '../../graphql';
import { ITodo } from '../../types';

interface IProps {
  item: ITodo;
  index: number;
}

const ShowTodo = ({ item, index }: IProps) => {
  const [setTaskDone] = useMutation(SET_TASK_DONE, {
    refetchQueries: [{ query: GET_TODOS }],
  });
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: [{ query: GET_TODOS }],
  });

  const handleCheckboxChange = async () => {
    try {
      await setTaskDone({
        variables: { task: item._id, user: item.assignee },
      });
    } catch (error) {
      console.error('Error setting task as done:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask({
        variables: { task: item._id, user: item.assignee },
      });
    } catch (error) {
      console.error('Error setting task as done:', error);
    }
  };

  return (
    <tr className="border-solid shadow-xl">
      <input type="checkbox" onChange={handleCheckboxChange} checked={item.isDone} />
      <td className="p-4">{index + 1}</td>
      <td className="p-4">{item.content}</td>
      <td className="p-4">{item.description}</td>
      <td className="p-4">{item.assignee}</td>
      <td className="p-4">{String(item.isDone)}</td>
      <td className="p-4">
        <Image src="assets/edit.svg" alt="EditIcon" />
      </td>
      <td className="p-2">
        <div onClick={handleDelete}>
          <Image src="assets/delete.svg" alt="DeleteIcon" className="cursor-pointer" />
        </div>
      </td>
    </tr>
  );
};

export default ShowTodo;