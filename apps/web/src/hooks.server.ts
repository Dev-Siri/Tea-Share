import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%app.theme%", event.cookies.get("theme") || "light"),
    filterSerializedResponseHeaders: () => true,
  });

  return response;
};
