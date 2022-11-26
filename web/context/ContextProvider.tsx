import React, { type FC, useState, useEffect } from "react";
import type { User as FirebaseUser } from "firebase/auth";

import type { ContextProps } from "../types";
import Context from "./Context";

const ContextProvider: FC<ContextProps> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [themeMode, setThemeMode] = useState<string>("dark");
  const [themeColor, setThemeColor] = useState<string>("#594194");

  useEffect(() => {
    const setupStates = () => {
      if (typeof window === "undefined") return;

      setUser(JSON.parse(localStorage.getItem("user") as string) as FirebaseUser);
      setThemeColor(localStorage.getItem("color") || "light");
      setThemeMode(localStorage.getItem("mode") || "#594194");
    };

    setupStates();
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
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
