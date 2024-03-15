'use client';
import React from 'react';
import Image from 'next/image';
import { changeTheme } from '@/utils/themeSwicher';

function ThemeSetting(): JSX.Element {
  const handleClick = (): void => {
    changeTheme('theme1');
  };

  return (
    <div role="link" onKeyDown={handleClick} tabIndex={0} onClick={handleClick}>
      <Image
        alt="ThemeSwitcher"
        src="assets/theme.svg"
        className="w-8 h-8 text-primary"
        width={24}
        height={24}
      />
    </div>
  );
}

export default ThemeSetting;
