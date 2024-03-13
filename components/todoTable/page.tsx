'use client';

import { useQuery } from '@apollo/client';
import ToDoItem from './todoItem';
import AddTodo from './addItem';
import { GET_TODOS } from '../../graphql';

/**
 *Todo Table
 * @return {JSX.Element}
 */
function TodoTable(): JSX.Element {
  const { loading } = useQuery(GET_TODOS);

  return (
    <div p-5 bg-gray-100>
      {loading ? (
        <span>Loading</span>
      ) : (
        <div className=" p-5 bg-gray-100 flex flex-col items-center">
          <AddTodo />
          <ToDoItem />
        </div>
      )}
    </div>
  );
}

export default TodoTable;
