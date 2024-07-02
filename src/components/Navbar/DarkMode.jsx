// DarkMode.jsx
import React, { useContext } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import ThemeContext from "../../helper/ThemeContext";

const DarkMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun className="text-2xl cursor-pointer" onClick={toggleTheme} />
      ) : (
        <BiSolidMoon className="text-2xl cursor-pointer" onClick={toggleTheme} />
      )}
    </>
  );
};

export default DarkMode;
