import { TIME_UNITS, TIME_UNIT_SECONDS } from "@constants/date";

import type { HandleGetter, RandomStringGetter, RelativeTimeGetter } from "@types";

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

/**
 * Generates a random string of characters from a pre-defined set.
 *
 * @returns A randomly generated string.
 */
export const getRandomString: RandomStringGetter = () => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890" as const;
  let randomString = "";

  for (let i = 0; i < characters.length; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return randomString;
};
