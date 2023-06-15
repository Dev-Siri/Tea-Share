import { error, redirect } from "@sveltejs/kit";
import jwtDecode from "jwt-decode";

import type { FirebaseUser, User } from "../../app";
import queryClient from "../../services/queryClient";

export const load = async ({ cookies }) => {
  const authToken = cookies.get("auth_token");

  if (!authToken) throw redirect(307, "/auth");

  const { name } = jwtDecode<FirebaseUser>(authToken);

  const fetchedUsers = await queryClient<User[] | null>("/users/search", {
    searchParams: {
      name,
      exact: true,
    },
  });

  if (!fetchedUsers) throw error(500, "Failed to fetch your information. Please try again later.");

  return {
    userId: fetchedUsers[0].userId,
  };
};
