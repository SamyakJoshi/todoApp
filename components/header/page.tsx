import { ReactElement } from 'react';
import ThemeSetting from '../themeSetting';

/**
 * Header component
 * @return {ReactElement}
 */
function Header(): ReactElement {
  return (
    <div className=" p-5 bg-blue-500 flex justify-between">
      <div>
        <h1>Todo</h1>
      </div>
      <div />
      <div className="flex">
        <input type="text" placeholder="search " className="p-2" />
        <ThemeSetting />
      </div>
    </div>
  );
}

export default Header;
