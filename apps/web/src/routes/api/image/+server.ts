import sharp from "sharp";

import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url: { searchParams }, fetch }) => {
  const imageUrl = searchParams.get("url");
  const height = searchParams.get("h");

  if (!imageUrl) return new Response("Image URL not provided");

  const imageResponse = await fetch(imageUrl);
  const imageBuffer = await imageResponse.arrayBuffer();

  try {
    let optimizedImage: Buffer;

    if (imageResponse.headers.get("Content-Type")?.includes("image/gif")) {
      optimizedImage = await sharp(imageBuffer).resize(Number(height)).gif().toBuffer();
    } else {
      optimizedImage = await sharp(imageBuffer).resize(Number(height)).avif().toBuffer();
    }

    return new Response(optimizedImage);
  } catch (error) {
    console.log(error);
    // Return the original image as-is instead of silently erroring in the server console
    // So the user gets an actual (Although unoptimized) image
    return new Response(imageBuffer);
  }
};
