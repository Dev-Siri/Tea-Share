import { ImageResponse } from "@vercel/og";

import { getRandomColor, getInitials } from "../utils";

export const runtime = "edge";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");

  if (!name) return new Response("`name` search param is undefined.", { status: 400 });

  const initials = getInitials(name);

  return new ImageResponse(
    (
      <div
        style={{
          background: getRandomColor(),
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: 200,
            color: "white",
          }}
        >
          {initials}
        </h1>
      </div>
    ),
    {
      height: 400,
      width: 400,
    }
  );
};
