import ThemeSetting from "../themeSetting";
function Header() {
  return (
    <div className=" p-5 bg-blue-500 flex justify-between">
      <div>
        <h1>Todo</h1>
      </div>
      <div></div>
      <div className="flex">
        <input type="text" placeholder="search " className="p-2" />
        <ThemeSetting />
      </div>
    </div>
  );
}

export default Header;
