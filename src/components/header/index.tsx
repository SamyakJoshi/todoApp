import ThemeSetting from '../themeSetting';

function Header(): JSX.Element {
  return (
    <div className=" p-5 bg-secondary  w-full flex justify-between text-typography ">
      <div>
        <h1 className="text-typography text-h4">Todo</h1>
      </div>
      <div className="flex">
        <input type="text" placeholder="search " className="p-2" />
        <ThemeSetting />
      </div>
    </div>
  );
}

export default Header;
