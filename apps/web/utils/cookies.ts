import type { CookieGetter, CookieRemover, CookieSetter, InfiniteItems } from "@/types";

// To speedup the `getCookie()` function, it is cached in memory
const cachedCookies: InfiniteItems = {};

/**
 * @param key The name of the cookie
 * @returns Value of the cookie
 */
export const getCookie: CookieGetter = key => {
  if (key in cachedCookies) return cachedCookies[key];

  const name = `${key}=`;
  const decodedCookie = decodeURIComponent(document.cookie);

  const regex = new RegExp(`(?:^|;\\s*)${name}([^;]*)`);
  const match = decodedCookie.match(regex);

  const value = match ? match[1] : "";
  cachedCookies[key] = value;

  return value;
};

/**
 * @param key The name of the cookie
 * @param value The value of the cookie
 */
export const setCookie: CookieSetter = (key, value) => {
  const expireDate = new Date(9999, 0, 1).toUTCString();

  document.cookie = `${key}=${value};expires=${expireDate};path=/`;
};

/**
 * @param key The name of the cookie
 */
export const removeCookie: CookieRemover = key => {
  const cookieName = encodeURIComponent(key);

  document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};
