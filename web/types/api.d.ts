import type { Post, PostFormData } from "./post";
import type { MongoDBUser, UserFormData } from "./user";

export interface FirebaseConfig {
  apiKey: string | undefined;
  authDomain: string | undefined;
  databaseURL: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined;
}

export type FetchPostsAPI = (page?: number, limit?: number) => Promise<Response>;
export type FetchItemByQuery = (query: string, user?: boolean) => Promise<Response>;
export type CreatePostAPI = (formdata: PostFormData) => Promise<Response>;
export type LikePostAPI = (id: string, name: string, image: string) => Promise<Response>;
export type CreateUserAPI = (formdata: UserFormData) => Promise<Response>;
export type FetchUsersAPI = (page?: number, limit?: number) => Promise<Response>;
export type UpdateProfileAPI = (id: string, user: MongoDBUser) => Promise<Response>;
