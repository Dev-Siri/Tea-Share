import jwtDecode from "jwt-decode";

import type { FirebaseUser, SessionHook } from "@/types";

import { getCookie } from "@/utils/cookies";

/**
 * ! Only use in components that are not rendered on the server or in a `useEffect`
 */
const useSession: SessionHook = () => {
  const authToken = getCookie("auth_token");
  const user = jwtDecode<FirebaseUser>(authToken);

  return user;
};

export default useSession;
