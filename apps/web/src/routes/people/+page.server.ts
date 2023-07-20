import queryClient from "$lib/utils/queryClient";

import type { User } from "../../app";

export async function load() {
  const initialUsers = await queryClient<User[]>("/users", {
    searchParams: {
      page: 1,
      limit: 10,
    },
  });

  return { initialUsers };
}
