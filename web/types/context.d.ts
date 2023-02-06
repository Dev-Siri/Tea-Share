import type { Dispatch, SetStateAction } from "react";

export type Switcher = (value: string) => void;

export interface ContextItems {
  themeMode?: string;
  setThemeMode?: Dispatch<SetStateAction<string>>;
  setTitle?: Dispatch<SetStateAction<string>>;
  title?: string;
  switchMode?: Switcher;
  switchColor?: Switcher;
  themeColor?: string;
}
