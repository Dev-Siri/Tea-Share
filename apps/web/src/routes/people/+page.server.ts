import queryClient from "../../services/queryClient";

import type { User } from "../../app";

export const load = async () => {
  const initialUsers = await queryClient<User[]>("/users", {
    searchParams: {
      page: 1,
      limit: 10,
    },
  });

  return { initialUsers };
};
