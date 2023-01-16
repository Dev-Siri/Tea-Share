import type { FetchItemByQuery, FetchPostsAPI, CreatePostAPI, LikePostAPI, CreateUserAPI, FetchUsersAPI, UpdateProfileAPI } from "../types";

const url: string = process.env.NEXT_PUBLIC_BACKEND_URL as string;

export const fetchPosts: FetchPostsAPI = (page, limit) => fetch(`${url}/posts?page=${page}&limit=${limit}`);
export const fetchUsers: FetchUsersAPI = (page, limit) => fetch(`${url}/users?page=${page}&limit=${limit}`);
export const fetchPostByQuery: FetchItemByQuery = (query, user = true) => fetch(`${url}/posts/search?query=${query}&user=${user}`);
export const fetchUserByQuery: FetchItemByQuery = query => fetch(`${url}/users/search?query=${query}`);
export const createPost: CreatePostAPI = formdata => fetch(`${url}/posts`, { method: "POST", body: JSON.stringify(formdata) });
export const LikePost: LikePostAPI = (id, name, image) => fetch(`${url}/posts/${id}/like?name=${name}&image=${image}`, { method: "PATCH" });
export const createUser: CreateUserAPI = formData => fetch(`${url}/users`, { method: "POST", body: JSON.stringify(formData) });
export const updateProfile: UpdateProfileAPI = (id, user) => fetch(`${url}/users/${id}`, { method: "PATCH", body: JSON.stringify(user) });
