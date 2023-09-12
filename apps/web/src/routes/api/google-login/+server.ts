import { PRIVATE_GOOGLE_CLIENT_ID, PRIVATE_GOOGLE_CLIENT_SECRET } from "$env/static/private";
import { redirect } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library";
import jwtDecode from "jwt-decode";

import type { User } from "$lib/types";

import { BASE_URL } from "$lib/env";
import queryClient from "$lib/utils/queryClient";

export interface GoogleUser {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  at_hash: string;
  name: string;
  picture: string;
  given_name: string;
  locale: string;
  email: string;
  email_verified: boolean;
  iat: number;
  exp: number;
}

interface AuthResponse {
  token: string;
}

export async function GET({ cookies, url, locals }) {
  const redirectUrl = `${BASE_URL}/api/google-login`;
  const code = url.searchParams.get("code");

  if (!code) throw redirect(302, "/auth");

  const oAuth2Client = new OAuth2Client(PRIVATE_GOOGLE_CLIENT_ID, PRIVATE_GOOGLE_CLIENT_SECRET, redirectUrl);
  const { tokens } = await oAuth2Client.getToken(code);

  oAuth2Client.setCredentials(tokens);

  const { id_token } = oAuth2Client.credentials;

  if (!id_token) throw new Error("The ID token for a Google login event was found missing.");

  const { name, picture, email } = jwtDecode<GoogleUser>(id_token);

  const { token } = await queryClient<AuthResponse>("/users/signup", {
    method: "POST",
    body: {
      authProvider: "google",
      username: name,
      userImage: picture,
      email,
    },
  });

  cookies.set("auth_token", token, {
    expires: new Date(9999, 0, 1),
    sameSite: true,
    path: "/",
  });

  locals.user = jwtDecode<User>(token);

  throw redirect(303, "/");
}
