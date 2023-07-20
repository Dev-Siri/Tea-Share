const cachedCookies: Record<string, string> = {};

export function getCookie(key: string) {
  if (key in cachedCookies) return cachedCookies[key];

  const name = `${key}=`;
  const decodedCookie = decodeURIComponent(document.cookie);

  const regex = new RegExp(`(?:^|;\\s*)${name}([^;]*)`);
  const match = decodedCookie.match(regex);

  const value = match?.[1] ? match[1] : "";
  cachedCookies[key] = value;

  return value;
}

export function setCookie(key: string, value: string) {
  const expireDate = new Date(9999, 0, 1).toUTCString();

  cachedCookies[key] = value;
  document.cookie = `${key}=${value};expires=${expireDate};path=/;samesite=strict`;
}

export function removeCookie(key: string) {
  const expireDate = new Date(0).toUTCString();

  document.cookie = `${key}=;expires=${expireDate};path=/;samesite=strict`;
}
