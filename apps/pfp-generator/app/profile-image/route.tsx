import { ImageResponse } from "@vercel/og";

import type { ServerRuntime } from "next";

import { getRandomColor } from "../utils";

export const runtime: ServerRuntime = "edge";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");

  if (!name) return new Response("`name` search param is undefined.", { status: 400 });

  const initials = name.slice(0, 2);

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
}
