import type { Theme } from "$lib/types";

export function load({ cookies, url, locals }) {
  const theme: Theme = (cookies.get("theme") as Theme) || "light";

  return {
    global: {
      theme,
      user: locals.user,
      transitionKey: url.pathname,
    },
  };
}
