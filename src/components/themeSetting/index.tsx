'use client';

import React from 'react';
import Image from 'next/image';

import { changeTheme } from '../../utils/themeSwicher';

const ThemeSetting = () => {
  const handleClick = () => {
    changeTheme('theme1');
  };

  return (
    <div onClick={handleClick} role="button" onKeyDown={handleClick} tabIndex={0}>
      <Image src="assets/theme.svg" className="w-8 h-8 text-primary" alt="theme image" />
    </div>
  );
}

export default ThemeSetting;
