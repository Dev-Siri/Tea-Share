import type { Theme } from "../app";

export function load({ cookies, locals }) {
  const theme: Theme = (cookies.get("theme") as Theme) || "light";

  return {
    global: {
      theme,
      user: locals.user,
    },
  };
}
