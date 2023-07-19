declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      user: User;
    }
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
