export async function encodeToBase64(image: Blob) {
  const imageBuffer = Buffer.from(await image.arrayBuffer());
  const base64Data = imageBuffer.toString("base64");

  const dataUrl = `data:${image.type};base64,${base64Data}`;

  return dataUrl;
}
