import { dev } from "$app/environment";
import { PRIVATE_GOOGLE_CLIENT_ID, PRIVATE_GOOGLE_CLIENT_SECRET } from "$env/static/private";
import { Redirect, fail, redirect, type Actions } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library";
import * as jwtDecode from "jwt-decode";

import type { User } from "$lib/types";

import { BASE_URL } from "$lib/env";
import { encodeToBase64 } from "$lib/server/encoding";
import { validateLoginSchema, validateSignupSchema } from "$lib/server/validation/auth/validateAuth";
import validateUser from "$lib/server/validation/user/validateUser";
import queryClient from "$lib/utils/queryClient";

interface AuthResponse {
  token: string;
}

export const actions: Actions = {
  async login({ request, cookies }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const loginFormValidationResult = validateLoginSchema(data);

    if (!loginFormValidationResult.success)
      return fail(400, {
        ...loginFormValidationResult,
        suppliedValues: { email: data["email"] },
      });

    const { email, password } = loginFormValidationResult.data;

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

      throw redirect(303, "/");
    } catch (error) {
      if ((error as Redirect)?.status) throw error;
      if (error instanceof Error)
        return fail(500, {
          apiError: error.message,
          suppliedValues: { email: data["email"] },
        });

      return fail(500, {
        suppliedValues: { email: data["email"] },
        apiError: "An unknown error occured",
      });
    }
  },
  async signup({ request, cookies }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const signupFormValidationResult = validateSignupSchema(data);

    if (!signupFormValidationResult.success)
      return fail(400, {
        ...signupFormValidationResult,
        suppliedValues: {
          email: data["email"],
          username: data["username"],
          image: data["image"],
        },
      });

    const { username, email, image, password } = signupFormValidationResult.data;

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
      console.log(error);
      if ((error as Redirect)?.status) throw error;
      if (error instanceof Error)
        return fail(500, {
          suppliedValues: {
            username,
            email,
          },
          apiError: error.message,
        });

      return fail(500, {
        suppliedValues: {
          username,
          email,
        },
        apiError: "An unknown error occured",
      });
    }
  },
  async googleLogin() {
    const redirectUrl = dev ? `${BASE_URL}/api/google-login` : `${BASE_URL}/api/google-login`;

    const oAuth2Client = new OAuth2Client(PRIVATE_GOOGLE_CLIENT_ID, PRIVATE_GOOGLE_CLIENT_SECRET, redirectUrl);

    const authorizedUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: "profile email openid",
      prompt: "consent",
    });

    throw redirect(302, authorizedUrl);
  },
};

export function load({ cookies }) {
  const authToken = cookies.get("auth_token");

  if (authToken) {
    let user: User | null;
    try {
      user = jwtDecode.default<User>(authToken);
    } catch {
      user = null;
    }

    const isUserValid = validateUser(user);

    if (isUserValid) throw redirect(303, "/");
  }
}
