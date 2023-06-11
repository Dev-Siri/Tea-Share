import { redirect } from "@sveltejs/kit";
import jwtDecode from "jwt-decode";

import type { FirebaseUser, Theme } from "../app";

export const load = ({ cookies, url }) => {
  const theme: Theme = (cookies.get("theme") as Theme) || "light";

  const authToken = cookies.get("auth_token");

  if (!authToken && url.pathname !== "/auth") throw redirect(303, "/auth");

  return {
    theme,
    user: url.pathname !== "/auth" ? jwtDecode<FirebaseUser>(authToken!) : null,
  };
};
