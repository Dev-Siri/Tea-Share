import { error, redirect, type Handle } from "@sveltejs/kit";
import * as jwtDecode from "jwt-decode";

import type { User } from "./app";

import validateUser from "$lib/server/validation/user/validateUser";

export const handle: Handle = async ({ event, resolve }) => {
  const authToken = event.cookies.get("auth_token");
  const unProtectedRoutes = ["/auth", "/reset-password", "/terms-of-service"];

  if (authToken && event.url.pathname.includes("/auth")) throw redirect(303, "/");

  if (!authToken && !unProtectedRoutes.includes(event.url.pathname)) throw redirect(303, "/auth");

  try {
    if (authToken) {
      const user = jwtDecode.default<User>(authToken);
      const isUserValid = validateUser(user);

      if (!isUserValid && !unProtectedRoutes.includes(event.url.pathname)) throw redirect(303, "/auth");

      event.locals.user = user;
    }
  } catch (thrownError) {
    if (thrownError instanceof jwtDecode.InvalidTokenError && !unProtectedRoutes.includes(event.url.pathname)) throw redirect(303, "/auth");

    // just show the 500 page because we don't know what went wrong
    throw error(500, "Something went wrong when trying to check your info. You are either not logged in or your token has been tampered with.");
  }

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%app.theme%", event.cookies.get("theme") || "light"),
    filterSerializedResponseHeaders: () => true,
  });

  return response;
};
