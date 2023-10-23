import { dev } from "$app/environment";

export const BASE_URL = dev
  ? "http://localhost:5173"
  : "https://tea-share.vercel.app";
