export const handle = async ({ event, resolve }) => {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%app.theme%", event.cookies.get("theme") || "light"),
  });

  return response;
};
