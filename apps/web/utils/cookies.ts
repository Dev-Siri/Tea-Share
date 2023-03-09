import type { CookieGetter, CookieRemover, CookieSetter } from "@/types";

/**
 * @param key The name of the cookie
 * @returns Value of the cookie
 */
export const getCookie: CookieGetter = key => {
  const name = `${key}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const seperatedCookies = decodedCookie.split(";");
  for (let i = 0; i < seperatedCookies.length; i++) {
    let cookie = seperatedCookies[i];

    while (cookie.charAt(0) === " ") cookie = cookie.substring(1);
    if (cookie.indexOf(name) === 0) return cookie.substring(name.length, cookie.length);
  }
  return "";
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
