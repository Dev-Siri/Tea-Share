import jwtDecode from "jwt-decode";

import type { FirebaseUser, SessionHook } from "@/types";

import { getCookie } from "@/utils/cookies";

/**
 * ! Only use in components that are not rendered on the server or in a `useEffect`
 * if user is required on the server, then use `useServerSession` instead.
 */
const useSession: SessionHook = () => {
  const authToken = getCookie("auth_token");
  const user = jwtDecode<FirebaseUser>(authToken);

  return user;
};

export default useSession;
