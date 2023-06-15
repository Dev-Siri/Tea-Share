import { redirect } from "@sveltejs/kit";
import jwtDecode from "jwt-decode";

import type { FirebaseUser, Theme } from "src/app.js";

export const load = ({ cookies, url }) => {
  const theme: Theme = (cookies.get("theme") as Theme) || "light";

  const authToken = cookies.get("auth_token");

  if (!authToken && url.pathname !== "/auth" && url.pathname !== "/reset-password") throw redirect(303, "/auth");

  return {
    theme,
    user: url.pathname !== "/auth" && url.pathname !== "/reset-password" ? jwtDecode<FirebaseUser>(authToken!) : null,
  };
};
