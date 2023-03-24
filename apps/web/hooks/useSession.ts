import type { FirebaseUser, SessionHook } from "@/types";

/**
 * ! Only use in components that are not rendered on the server or in a `useEffect`
 */
const useSession: SessionHook = async () => {
  const { getCookie } = await import("@/utils/cookies");
  const { default: jwtDecode } = await import("jwt-decode");

  const authToken = getCookie("auth_token");
  const user = jwtDecode<FirebaseUser>(authToken);

  return user;
};

export default useSession;
