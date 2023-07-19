import type { Theme } from "../app";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ cookies, locals }) => {
  const theme: Theme = (cookies.get("theme") as Theme) || "light";

  return {
    global: {
      theme,
      user: locals.user,
    },
  };
};
