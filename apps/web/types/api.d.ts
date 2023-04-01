import type { Post, PostFormData } from "./post";
import type { MongoDBUser, UserFormData } from "./user";

type CacheBehaviour = Pick<RequestInit, "cache" | "next">;

export type FetchPostsAPI = (page: number, limit: number, cacheBehaviour?: CacheBehaviour) => Promise<Post[]>;
export type FetchUsersAPI = (page: number, limit: number, cacheBehaviour?: CacheBehaviour) => Promise<MongoDBUser[]>;
export type FetchUsersByName = (
  query: string,
  cacheBehaviour?: CacheBehaviour,
  exactOrFromUser?: boolean
) => Promise<MongoDBUser | MongoDBUser[] | null>;
export type FetchPostsByQuery = (query: string, cacheBehaviour?: CacheBehaviour, exactOrFromUser?: boolean) => Promise<Post[] | null>;
export type CreatePostAPI = (formdata: PostFormData) => Promise<Response>;
export type LikePostAPI = (id: string, name: string, image: string) => Promise<Response>;
export type CreateUserAPI = (formdata: UserFormData) => Promise<Response>;
export type UpdateProfileAPI = (id: string, user: MongoDBUser) => Promise<Response>;
