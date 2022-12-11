import { useEffect, useState } from "react";

import type { PageTitleHook } from "../types";
import type { User as FirebaseUser } from "firebase/auth";

const usePageTitle: PageTitleHook = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [pageTitle, setPageTitle] = useState<string>("");

  useEffect(() => {
    const calculatePageTitle = () => {
      setUser(JSON.parse(localStorage.getItem("user") as string));

      switch (location.pathname) {
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
    };

    calculatePageTitle();
  }, []);

  return pageTitle;
};

export default usePageTitle;
