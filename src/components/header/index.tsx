import Image from 'next/image';
import ButtonSetting from '@/components/buttonSetting';
import Filter from '@/components/filter';
import ThemeSetting from '../themeSetting';

function Header(): JSX.Element {
  return (
    <div className=" p-5 bg-gray-100 flex flex-col">
      <div>
        <div className="mb-4 flex justify-between">
          <div className="mb-4 flex justify-between">
            <Image src="/assets/to-do-list.svg" alt="search" width={50} height={50} className="rounded-full" />
            <h1 className=" ml-2 text-4xl font-extrabold  tracking-tight md:text-3xl lg:text-5xl ">TODO APP</h1>
          </div>
          <ButtonSetting />
        </div>

        <p className="mb-4 text-lg  text-gray-400 lg:text-xl dark:text-gray-500 font-extrabold">
          Don't let your tasks go unorganized, make a to-do list today!!
        </p>
      </div>
      <div className="flex items-center bg-white rounded-xl p-2">
        <div className="flex items-center ">
          <div className="bg-white p-2 ">
            <Filter />
          </div>
        </div>
        <div className="flex ">
          <Image src="/assets/search.svg" alt="search" width={20} height={20} />
          <input type="text" className="w-3/4 focus:outline-none ml-2 text-gray-400 text-sm" placeholder="Search..." />
        <ThemeSetting />
        </div>
     </div>
    </div>
  );
}

export default Header;
