import { error, redirect, type Redirect } from "@sveltejs/kit";
import * as jwtDecode from "jwt-decode";

import type { User } from "$lib/types";

import validateUser from "$lib/server/validation/user/validateUser";

export async function handle({ event, resolve }) {
  const authToken = event.cookies.get("auth_token");
  const unProtectedRoutes = ["/auth", "/reset-password", "/terms-of-service", "/embed"];
  const onUnprotectedRoutes = unProtectedRoutes.some(route => event.url.pathname.endsWith(route));

  if (!authToken && !onUnprotectedRoutes) throw redirect(303, "/auth");

  try {
    if (authToken) {
      const user = jwtDecode.default<User>(authToken);
      const isUserValid = validateUser(user);

      if (!isUserValid && !onUnprotectedRoutes) throw redirect(303, "/auth");

      event.locals.user = user;
    }
  } catch (thrownError) {
    // A hack to let the `throw redirect` inside of the try, execute. Cmon sveltekit :/
    if ((thrownError as Redirect)?.status) throw thrownError;
    if (thrownError instanceof jwtDecode.InvalidTokenError && !unProtectedRoutes.includes(event.url.pathname)) throw redirect(303, "/auth");

    // just show the 500 page because we don't know what went wrong
    throw error(500, "Something went wrong when trying to check your info. You are either not logged in or your token has been tampered with.");
  }

  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace("%app.theme%", event.url.pathname.endsWith("/embed") ? "embed-theme" : event.cookies.get("theme") || "light"),
    filterSerializedResponseHeaders: () => true,
  });

  return response;
}
