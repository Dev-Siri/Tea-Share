import React, { useState, useContext, createContext, useEffect } from "react";
import type { FirebaseUser } from "../types";

const StateContext = createContext({
  searchTerm: "" as string,
  setSearchTerm: "" as any,
  themeMode: "",
  setThemeMode: "" as any,
  switchMode: (mode: string): void => {},
  switchColor: (color: string): void => {},
  themeColor: "",
  user: { displayName: "", photoURL: "" } as FirebaseUser,
  setUser: "" as any,
});

export const ContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<FirebaseUser>({} as FirebaseUser);
  const [searchTerm, setSearchTerm] = useState("");

  const [themeMode, setThemeMode] = useState("light");
  const [themeColor, setThemeColor] = useState("#594194");

  useEffect(() => {
    if (typeof window === "undefined") return;

    setUser(JSON.parse(localStorage.getItem("user") as string) as FirebaseUser);
    setThemeColor(localStorage.getItem("color") || "light");
    setThemeMode(localStorage.getItem("mode") || "#594194");
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
    <StateContext.Provider
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
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
