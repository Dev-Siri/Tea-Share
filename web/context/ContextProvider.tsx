import { useEffect, useState, type FC } from "react";

import colors from "@constants/colors";
import usePageTitle from "@hooks/usePageTitle";

import type { ContextProps, Switcher } from "../types";

import Context from "./Context";

const ContextProvider: FC<ContextProps> = ({ children }) => {
  const [title, setTitle] = useState(usePageTitle("server"));
  const [themeMode, setThemeMode] = useState<string>("dark");
  const [themeColor, setThemeColor] = useState<string>("#594194");

  useEffect(() => {
    // Set the default states of the `color` and `mode` variables if
    // they don't exist in `localStorage`. colors[3] = #594194 or a custom shade of purple
    setThemeColor(localStorage.getItem("color") ?? colors[3]);
    setThemeMode(localStorage.getItem("mode") ?? "light");
  }, []);

  const switchMode: Switcher = mode => {
    localStorage.setItem("mode", mode);
    setThemeMode(mode);
  };

  const switchColor: Switcher = color => {
    localStorage.setItem("color", color);
    setThemeColor(color);
  };

  return (
    <Context.Provider
      value={{
        themeMode,
        setThemeMode,
        switchMode,
        switchColor,
        themeColor,
        setTitle,
        title,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
