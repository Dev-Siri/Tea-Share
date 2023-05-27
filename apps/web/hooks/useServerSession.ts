import jwtDecode from "jwt-decode";
import { cookies } from "next/headers";

import type { FirebaseUser } from "@/types";

/**
 * Using this will automatically cause the page to do dynamic rendering
 */
const useServerSession = () => {
  const nextCookies = cookies();
  const authToken = nextCookies.get("auth_token")?.value!;

  return jwtDecode<FirebaseUser>(authToken);
};

export default useServerSession;
