import { redirect } from "@sveltejs/kit";
import jwtDecode from "jwt-decode";

import type { Theme, User } from "../app";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ cookies, url }) => {
  const theme: Theme = (cookies.get("theme") as Theme) || "light";

  const authToken = cookies.get("auth_token");
  const notOnUnprotectedRoutes = url.pathname !== "/auth" && url.pathname !== "/reset-password" && url.pathname !== "/terms-of-service";

  if (!authToken && notOnUnprotectedRoutes) throw redirect(303, "/auth");

  return {
    theme,
    user: notOnUnprotectedRoutes ? jwtDecode<User>(authToken!) : null,
  };
};
