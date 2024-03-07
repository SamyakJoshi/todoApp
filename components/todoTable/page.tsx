import ToDoItem from "./todoItem";
import AddTodo from "./addItem";

function TodoTable() {

  return (
    <>
          <div className="flex flex-col items-center">
            <AddTodo />
            <ToDoItem />
          </div>
    </>
  );
}

export default TodoTable;
