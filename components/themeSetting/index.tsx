'use client'
import React, { useState } from "react";
import { changeTheme } from "../../utils/themeSwicher";

const ThemeSetting = () => {
  const [theme, setTheme] = useState("light");
  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
      changeTheme("dark");
      return;
    }
    setTheme("light");
    changeTheme("light");
  };

  return (
    <div onClick={handleClick}>
      <img src="assets/theme.svg" className="w-8 h-8 text-primary" />
    </div>
  );
};

export default ThemeSetting;
