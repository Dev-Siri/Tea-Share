// prettier-ignore

export const PAGE_DESCRIPTION = "Tea share is an online social networking platform where you can share images with everyone. Get the best experience of Tea Share by signing up today!" as const;
export const PAGE_CREATOR = "Dev-Siri" as const;
export const PAGE_URL = process.env.NODE_ENV === "production" ? "https://tea-share.vercel.app" : ("http//localhost:3000" as const);
export const PAGE_TITLE = "Tea Share" as const;
export const PAGE_FAVICON_ALT = "Tea Share Logo" as const;
export const PAGE_KEYWORDS = ["Tea Share", "Tea", "Social Media", "Social Networking", "News", "Connect", "Share"];
