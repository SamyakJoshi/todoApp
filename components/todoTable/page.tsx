import ToDoItem from "./todoItem";
import AddTodo from "./addItem";

function TodoTable() {
  // const { loading } = useQuery(GET_TODOS);

  return (
    <>
      {/* {loading ? (
        <span>Loading</span>
      ) : ( */}
        <>
          <div className="flex flex-col items-center">
            <AddTodo />
            <ToDoItem />
          </div>
        </>
      {/* )} */}
    </>
  );
}

export default TodoTable;
