import type { Post, PostFormData } from "./post";
import type { MongoDBUser, UserFormData } from "./user";

export type FetchPostsAPI = (page: number, limit: number) => Promise<Post[]>;
export type FetchUsersAPI = (page: number, limit: number) => Promise<MongoDBUser[]>;
export type FetchItemByQuery<T> = (query: string, exactOrFromUser?: boolean) => Promise<T | null>;
export type CreatePostAPI = (formdata: PostFormData) => Promise<Response>;
export type LikePostAPI = (id: string, name: string, image: string) => Promise<Response>;
export type CreateUserAPI = (formdata: UserFormData) => Promise<Response>;
export type UpdateProfileAPI = (id: string, user: MongoDBUser) => Promise<Response>;
