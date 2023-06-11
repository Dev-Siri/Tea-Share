import queryClient from "../../services/queryClient";

import type { MongoDBUser } from "../../app";

export const load = async () => {
  const initialUsers = await queryClient<MongoDBUser[]>("/users", {
    searchParams: {
      page: 1,
      limit: 10,
    },
  });

  return { initialUsers };
};
