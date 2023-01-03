import type { AxiosResponse } from "axios";
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

export type FetchPostsAPI = (page?: number, limit?: number) => Promise<AxiosResponse<any, any>>;
export type FetchItemByQuery = (query: string, user?: boolean) => Promise<AxiosResponse<any, any>>;
export type CreatePostAPI = (formdata: PostFormData) => Promise<AxiosResponse<any, any>>;
export type LikePostAPI = (id: string, name: string, image: string) => Promise<AxiosResponse<any, any>>;
export type CreateUserAPI = (formdata: UserFormData) => Promise<AxiosResponse<any, any>>;
export type FetchUsersAPI = (page?: number, limit?: number) => Promise<AxiosResponse<any, any>>;
export type UpdateProfileAPI = (id: string, user: MongoDBUser) => Promise<AxiosResponse<void, any>>;
