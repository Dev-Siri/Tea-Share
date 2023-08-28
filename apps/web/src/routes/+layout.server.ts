import type { Theme, User } from "$lib/types";

import queryClient from "$lib/utils/queryClient";

export async function load({ cookies, url, locals }) {
  const theme: Theme = (cookies.get("theme") as Theme) || "light";
  const users = await queryClient<User[]>("/users", {
    searchParams: {
      page: 1,
      limit: 6,
    },
  });

  return {
    global: {
      theme,
      user: locals.user,
      transitionKey: url.pathname,
      users,
    },
  };
}
