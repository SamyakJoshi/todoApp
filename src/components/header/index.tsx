import React from 'react';
import { getTodo } from '@/lib/actions/todo';
import ThemeSetting from '../themeSetting';

/**
 * @functions Header
 * @return {JSX.Element}
 */
async function Header() {
  const data = await getTodo();
  // eslint-disable-next-line no-console
  console.log(data);
  return (
    <div className=" p-5 bg-blue-500 flex justify-between">
      <div>
        <h1>Todo</h1>
      </div>
      <div className="flex">
        <input type="text" placeholder="search " className="p-2" />
        <ThemeSetting />
      </div>
    </div>
  );
}

export default Header;
