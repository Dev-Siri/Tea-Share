import type { Document } from "mongoose";

export interface Post {
  people: string[];
  peopleImage: string[];
  createdAt: Date;
  title: string;
  description: string;
  image: string;
  author: string;
  authorImage: string;
}

export interface User {
  username: string;
  email: string;
  image: string;
}

export type DatabaseDocument<T> = Document<unknown, any, T>;
