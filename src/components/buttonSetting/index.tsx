'use client';

import React from 'react';
// import Image from 'next/image';

const ButtonSetting = () => {
  const handleClick = () => {
    console.log('Button');
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center px-3 py-1 bg-red-400 text-white rounded-lg hover:bg-white-700 h-10 "
      role="button"
    >
      {/* <Image src="/assets/theme.svg" alt="themeSwitcher" width={30} height={30} /> */}
      <span className="ml-2">New Category</span>
    </button>
  );
};

export default ButtonSetting;
