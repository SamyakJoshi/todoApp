import ShowTodo from "./todoTable";
import { getTodo } from "@/lib/actions/todo";

const ToDoItem = async () => {
  const value = await getTodo();
  console.log(value, "====value");

  return (
    <>
      <div className="">
        <tr className="border-solid  shadow-xl">
          <td className="p-4">Completed</td>

          <td className="p-4">Id</td>
          <td className="p-4 ">Content</td>
          <td className="p-4">Description</td>
          <td className="p-4">Assignee</td>
          <td className="p-4">Is done</td>
          <td className="p-4">Actions</td>
        </tr>
        {value?.map((item, index) => (
          <ShowTodo item={item} index={index} key={index} />
        ))}
      </div>
    </>
  );
};

export default ToDoItem;
