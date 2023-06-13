import { redirect } from "@sveltejs/kit";

export const load = ({ cookies, url }) => {
  if (url.pathname !== "/info") throw redirect(307, "/info");

  // const theme: Theme = (cookies.get("theme") as Theme) || "light";

  // const authToken = cookies.get("auth_token");

  // if (!authToken && url.pathname !== "/auth" && url.pathname !== "/reset-password") throw redirect(303, "/auth");

  // return {
  //   theme,
  //   user: url.pathname !== "/auth" && url.pathname !== "/reset-password" ? jwtDecode<FirebaseUser>(authToken!) : null,
  // };
};
