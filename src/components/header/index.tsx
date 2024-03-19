import Logo from '../logoComponent/Logo';
import ThemeSetting from '../themeSetting';

function Header(): JSX.Element {
  return (
    <div className=" p-5 bg-blue-500 flex justify-between">
      <div>
        <Logo/>
      </div>
      <div className="flex">
        <input type="text" placeholder="search " className="p-2" />
        <ThemeSetting />
      </div>
    </div>
  );
}

export default Header;
