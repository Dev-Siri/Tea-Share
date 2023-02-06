import { TIME_UNITS, TIME_UNIT_SECONDS } from "@constants/date";
import type { BannerImageGetter, HandleGetter, RelativeTimeGetter } from "../types";

/**
 * @param size - Size of the image Width to Height
 * @param categories - List of categories for the image to be related to.
 * @returns A url that can be used in an `<Image />` component
 */
export const getBannerImage: BannerImageGetter = (size, categories) => {
  const [width, height]: [number, number] = size;
  const categoriesAsString: string = categories.join(",");

  return `https://source.unsplash.com/${width}x${height}/?${categoriesAsString}`;
};

/**
 * @param date - The Date object to calculate the time
 * @returns A relative time string.
 */
export const getRelativeTime: RelativeTimeGetter = date => {
  const timeMs = date.getTime();
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);
  const unitIndex = TIME_UNIT_SECONDS.findIndex(timeUnitSecond => timeUnitSecond > Math.abs(deltaSeconds));

  const divisor = unitIndex ? TIME_UNIT_SECONDS[unitIndex - 1] : 1;
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  return rtf.format(Math.floor(deltaSeconds / divisor), TIME_UNITS[unitIndex]);
};

/**
 * @param username A user's displayName
 * @returns A string with the username formatted with '@'
 */
export const getHandle: HandleGetter = username => `@${username?.toLowerCase()?.split(" ")?.join("-")}`;
