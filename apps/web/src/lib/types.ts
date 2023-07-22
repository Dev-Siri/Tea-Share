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
