'use client'
import React from "react";
import { changeTheme } from "../../utils/themeSwicher";

const ThemeSetting = () => {
  const handleClick = () => {
    changeTheme("theme1");
  };

  return (
    <div onClick={handleClick}>
      <img src="assets/theme.svg" className="w-8 h-8 text-primary" />
    </div>
  );
};

export default ThemeSetting;
