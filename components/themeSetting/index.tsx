'use client';

import React from 'react';
import Image from 'next/image';
import { changeTheme } from '../../utils/themeSwicher';

const ThemeSetting = () => {
  const handleClick = () => {
    changeTheme('theme1');
  };

  return (
    <div onClick={handleClick} role="button">
      <Image src="assets/theme.svg" alt="themeSwitcher" className="w-8 h-8 text-primary" />
    </div>
  );
};

export default ThemeSetting;
