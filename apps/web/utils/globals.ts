import { TIME_UNITS, TIME_UNIT_SECONDS } from "@/constants/date";

import type { HandleGetter, RelativeTimeGetter } from "@/types";

/**
 * @param date - The Date object to calculate the time
 * @returns A relative time string.
 */
export const getRelativeTime: RelativeTimeGetter = dateString => {
  const date = new Date(dateString);
  const timeMs = date.getTime();
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);
  const unitIndex = TIME_UNIT_SECONDS.findIndex(timeUnitSecond => timeUnitSecond > Math.abs(deltaSeconds));

  const divisor = unitIndex ? TIME_UNIT_SECONDS[unitIndex - 1] : 1;
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  try {
    return rtf.format(Math.floor(deltaSeconds / divisor), TIME_UNITS[unitIndex]);
  } catch (error) {
    console.error(error);
    return "Error parsing date";
  }
};

/**
 * @param username A user's displayName
 * @returns A string with the username formatted with '@'
 */
export const getHandle: HandleGetter = username => `@${username?.toLowerCase()?.split(" ")?.join("-")}`;
