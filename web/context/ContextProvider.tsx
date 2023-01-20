import { type FC, useState, useEffect } from "react";

import usePageTitle from "../hooks/usePageTitle";
import colors from "../constants/colors";

import type { ContextProps } from "../types";

import Context from "./Context";

const ContextProvider: FC<ContextProps> = ({ children }) => {
  const [title, setTitle] = useState(usePageTitle("server"));
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [themeMode, setThemeMode] = useState<string>("dark");
  const [themeColor, setThemeColor] = useState<string>("#594194");

  useEffect(() => {
    // Set the default states of the `color` and `mode` variables if
    // they don't exist in `localStorage`. colors[3] = #594194 or a custom shade of purple
    setThemeColor(localStorage.getItem("color") ?? colors[3]);
    setThemeMode(localStorage.getItem("mode") ?? "light");
  }, []);

  const switchMode = (mode: string) => {
    localStorage.setItem("mode", mode);
    setThemeMode(mode);
  };

  const switchColor = (color: string) => {
    localStorage.setItem("color", color);
    setThemeColor(color);
  };

  return (
    <Context.Provider
      value={{
        searchTerm,
        setSearchTerm,
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
