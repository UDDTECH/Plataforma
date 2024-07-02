import React from "react";
import { useTheme } from "../../Providers/ThemeProvider";
import { Button } from "../Button/Button";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div>
      {theme === "dark" ? (
        <Button
          onClick={() => handleChangeTheme("light")}
          size={"sm"}
          variant={"ghost"}
        >
          <FaSun className="z-10 h-5 w-5 text-white" />
        </Button>
      ) : (
        <Button
          onClick={() => handleChangeTheme("dark")}
          size={"sm"}
          variant={"ghost"}
        >
          <FaMoon className="z-10 h-5 w-5 text-black" />
        </Button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
