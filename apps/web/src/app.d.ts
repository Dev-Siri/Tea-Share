declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

export type Theme = "light" | "dark";

export interface Post extends Omit<User, "email"> {
  postId: string;
  title: string;
  description: string;
  postImage: string;
  createdAt: string;
  likes: Pick<User, "username" | "userImage">[];
}

export interface User {
  userId: string;
  username: string;
  userImage: string;
  email: string;
}

export interface FirebaseUser {
  name: string;
  picture: string;
  iss: string;
  aud: string;
  auth_time: number;
  user_id: string;
  sub: string;
  iat: number;
  exp: number;
  email: string;
  email_verified: boolean;
  firebase: {
    identities: {
      email: string[];
    };
    sign_in_provider: string;
  };
}
