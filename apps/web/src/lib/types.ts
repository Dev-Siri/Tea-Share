export type Theme = "light" | "dark";

export interface Post extends Omit<User, "email"> {
  postId: string;
  caption: string;
  postImage?: string;
  createdAt: string;
  likes: Pick<User, "username" | "userImage">[];
}

export interface User {
  userId: string;
  username: string;
  userImage: string;
  email: string;
}

export interface Comment extends Omit<User, "email" | "userId"> {
  comment: string;
  createdAt: string;
}

export interface CommentsResponse {
  total: number;
  comments: Comment[];
}