export const getRelativeTime = (dateString: string) => {
  const date = new Date(dateString);
  const timeMs = date.getTime();
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);
  const timeUnitSeconds = [60, 3600, 86400, 604800, 2592000, 31536000, Infinity];
  const timeUnits = ["second", "minute", "hour", "day", "week", "month", "year"] as const;

  const unitIndex = timeUnitSeconds.findIndex(timeUnitSecond => timeUnitSecond > Math.abs(deltaSeconds));

  const divisor = unitIndex ? timeUnitSeconds[unitIndex - 1] : 1;
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  try {
    return rtf.format(Math.floor(deltaSeconds / divisor), timeUnits[unitIndex]);
  } catch (error) {
    console.error(error);
    return "Error parsing date";
  }
};

export const getHandle = (username?: string) => `@${username?.toLowerCase()?.split(" ")?.join("-")}`;

export const encodeToBase64 = async (image: File) => {
  const imageBuffer = Buffer.from(await image.arrayBuffer());
  const base64Data = imageBuffer.toString("base64");

  const dataUrl = `data:${image.type};base64,${base64Data}`;

  return dataUrl;
};
