import { useEffect } from "react";
import { useStateContext } from "../context/StateContext";

const usePageTitle = (): string => {
  const { user } = useStateContext();
  let pageTitle: string = "";

  useEffect(() => {
    switch (window.location.pathname) {
      case "/auth":
        pageTitle = "Tea Share - A Brand New Social Networking Platform";
      case "/":
        pageTitle = "Tea Share - Home";
      case "/settings":
        pageTitle = "Tea Share - Settings";
      case "/users":
        pageTitle = "Tea Share - Users";
      case `/users/${user?.displayName}`:
        pageTitle = `Tea Share - ${user?.displayName}`;
      default:
        pageTitle = "Tea Share";
    }
  }, []);

  return pageTitle;
};

export default usePageTitle;
