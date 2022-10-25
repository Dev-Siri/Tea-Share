import { useStateContext } from "../context/StateContext";

const usePageTitle = (): string => {
  const { user } = useStateContext();

  switch (window.location.pathname) {
    case "/auth":
      return "Tea Share - A Brand New Social Networking Platform";
    case "/":
      return "Tea Share - Home";
    case "/settings":
      return "Tea Share - Settings";
    case "/users":
      return "Tea Share - Users";
    case `/users/${user.displayName}`:
      return `Tea Share - ${user.displayName}`;
    default:
      return "Tea Share";
  }
};

export default usePageTitle;
