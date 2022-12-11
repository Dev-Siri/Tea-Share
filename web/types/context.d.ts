export interface ContextItems {
  searchTerm?: string;
  setSearchTerm?: any;
  themeMode?: string;
  setThemeMode?: any;
  switchMode?: (mode: string) => void;
  switchColor?: (color: string) => void;
  themeColor?: string;
}
