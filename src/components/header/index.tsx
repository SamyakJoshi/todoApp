import { getTodo } from "@/lib/actions/todo";
import ThemeSetting from "../themeSetting";
async function Header() {
  const data= await getTodo();
  return (
    <div className=" p-5 bg-blue-500 flex justify-between">
      <div>
        <h1>Todo</h1>
      </div>
      <div className="flex">
        <input type="text" placeholder="search " className="p-2" />
        <ThemeSetting/>
      </div>
    </div>
  );
}

export default Header;
