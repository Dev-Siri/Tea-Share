import { dev } from "$app/environment";
import { PRIVATE_GOOGLE_CLIENT_ID, PRIVATE_GOOGLE_CLIENT_SECRET } from "$env/static/private";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library";

import type { PageServerLoad } from "./$types";

import { encodeToBase64 } from "$lib/utils/globals";
import queryClient from "$lib/utils/queryClient";

interface AuthResponse {
  token: string;
}

export const actions: Actions = {
  async login({ request, cookies }) {
    const formData = await request.formData();

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password || email instanceof Blob || password instanceof Blob)
      return fail(400, {
        errorMessage: "The credentials provided are invalid",
        email,
      });

    try {
      const { token } = await queryClient<AuthResponse>("/users/login", {
        method: "POST",
        body: {
          email,
          password,
        },
      });

      cookies.set("auth_token", token, {
        expires: new Date(9999, 0, 1),
        sameSite: true,
      });

      throw redirect(301, "/");
    } catch (error) {
      if (error instanceof Error)
        return {
          email,
          errorMessage: error.message,
        };

      return {
        email,
        errorMessage: "An unknown error occured",
      };
    }
  },
  async signup({ request, cookies }) {
    const formData = await request.formData();

    const email = formData.get("email");
    const image = formData.get("image");
    const username = formData.get("username");
    const password = formData.get("password");

    if (
      !email ||
      !password ||
      !username ||
      !image ||
      email instanceof Blob ||
      password instanceof Blob ||
      username instanceof Blob ||
      typeof image === "string"
    )
      return fail(400, { username, email, errorMessage: "The credentials provided are invalid" });

    try {
      const imageBase64 = await encodeToBase64(image);

      const { token } = await queryClient<AuthResponse>("/users/signup", {
        method: "POST",
        body: {
          username,
          userImage: imageBase64,
          email,
          password,
          authProvider: "mail",
        },
      });

      cookies.set("auth_token", token, {
        expires: new Date(9999, 0, 1),
        sameSite: true,
      });

      throw redirect(301, "/");
    } catch (error) {
      if (error instanceof Error)
        return {
          username,
          email,
          errorMessage: error.message,
        };

      return {
        username,
        email,
        errorMessage: "An unknown error occured",
      };
    }
  },
  async googleLogin() {
    const redirectUrl = dev ? "http://localhost:5173/api/google-login" : "https://tea-share.vercel.app/api/google-login";

    const oAuth2Client = new OAuth2Client(PRIVATE_GOOGLE_CLIENT_ID, PRIVATE_GOOGLE_CLIENT_SECRET, redirectUrl);

    const authorizedUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: "profile email openid",
      prompt: "consent",
    });

    throw redirect(302, authorizedUrl);
  },
};

export const load: PageServerLoad = ({ cookies }) => {
  const authToken = cookies.get("auth_token");

  if (authToken) throw redirect(301, "/");
};
