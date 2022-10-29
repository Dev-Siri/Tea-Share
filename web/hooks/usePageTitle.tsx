import { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";

const usePageTitle = (): string => {
  const { user } = useStateContext();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    switch (window.location.pathname) {
      case "/auth":
        setPageTitle("Tea Share - A Brand New Social Networking Platform");
      case "/":
        setPageTitle("Tea Share - Home");
      case "/settings":
        setPageTitle("Tea Share - Settings");
      case "/users":
        setPageTitle("Tea Share - Users");
      case `/users/${user?.displayName}`:
        setPageTitle(`Tea Share - ${user?.displayName}`);
      default:
        setPageTitle("Tea Share");
    }
  }, []);

  return pageTitle;
};

export default usePageTitle;
