import type { PageTitleHook } from "../types";

import { PAGE_TITLE } from "@constants/pageInfo";

const usePageTitle: PageTitleHook = environment => {
  if (environment === "server") return PAGE_TITLE;

  const user = JSON.parse(localStorage.getItem("user") as string);

  switch (location.pathname) {
    case "/auth":
      return "Login";
    case "/":
      return "Tea Share";
    case "/settings":
      return "Settings";
    case "/people":
      return "People";
    case `/people/${user?.displayName}`:
      return user?.displayName;
    default:
      return "Tea Share";
  }
};

export default usePageTitle;
