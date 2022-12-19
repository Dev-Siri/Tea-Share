import type { PageTitleHook } from "../types";

import { PAGE_TITLE } from "../constants/pageInfo";

const usePageTitle: PageTitleHook = environment => {
  if (environment === "server") return PAGE_TITLE;

  const user = JSON.parse(localStorage.getItem("user") as string);

  switch (location.pathname) {
    case "/auth":
      return "Tea Share - Signup | Login";
    case "/":
      return "Tea Share - Home";
    case "/settings":
      return "Tea Share - Settings";
    case "/users":
      return "Tea Share - Users";
    case `/users/${user?.displayName}`:
      return `Tea Share - ${user?.displayName}`;
    default:
      return "Tea Share";
  }
};

export default usePageTitle;
