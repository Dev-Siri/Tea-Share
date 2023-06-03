const cachedCookies: Record<string, string> = {};

export const getCookie = (key: string) => {
  if (key in cachedCookies) return cachedCookies[key];

  const name = `${key}=`;
  const decodedCookie = decodeURIComponent(document.cookie);

  const regex = new RegExp(`(?:^|;\\s*)${name}([^;]*)`);
  const match = decodedCookie.match(regex);

  const value = match ? match[1] : "";
  cachedCookies[key] = value;

  return value;
};

export const setCookie = (key: string, value: string) => {
  const expireDate = new Date(9999, 0, 1).toUTCString();

  cachedCookies[key] = value;
  document.cookie = `${key}=${value};expires=${expireDate};path=/`;
};

export const removeCookie = (key: string) => {
  const expireData = new Date(1970, 0, 1).toUTCString();
  const cookieName = encodeURIComponent(key);

  document.cookie = `${cookieName}=;expires=${expireData};path=/`;
};
