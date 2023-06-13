import { PUBLIC_BACKEND_URL } from "$env/static/public";

export const load = async () => {
  const response = await fetch(`${PUBLIC_BACKEND_URL}/progress-tracker`);
  const progress = Number(await response.text());

  return { progress };
};
