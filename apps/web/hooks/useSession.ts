import jwtDecode from "jwt-decode";

import type { FirebaseUser } from "@/types";

import { getCookie } from "@/utils/cookies";

/**
 * if user is required on the server, then use `useServerSession` instead.
 */
const useSession = () => {
  const authToken = getCookie("auth_token");
  const user = jwtDecode<FirebaseUser>(authToken);

  return user;
};

export default useSession;
