import type { Dispatch, SetStateAction } from "react";

export interface ContextItems {
  searchTerm?: string;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
  themeMode?: string;
  setThemeMode?: Dispatch<SetStateAction<string>>;
  setTitle?: Dispatch<SetStateAction<string>>;
  title?: string;
  switchMode?: (mode: string) => void;
  switchColor?: (color: string) => void;
  themeColor?: string;
}
