import axios, { AxiosRequestConfig } from "axios";
import type { FetchItemByQuery, FetchPostsAPI, CreatePostAPI, LikePostAPI, CreateUserAPI, FetchUsersAPI, UpdateProfileAPI } from "../types";

const API = axios.create({ baseURL: process.env.NEXT_PUBLIC_BACKEND_URL });

const headers: AxiosRequestConfig<any> = {
  headers: {
    Accept: "application/json",
    "Accept-Encoding": "identity",
  },
};

export const fetchPosts: FetchPostsAPI = limit => API.get(`/posts?limit=${limit}`, headers);
export const fetchUsers: FetchUsersAPI = () => API.get("/users", headers);
export const fetchPostByQuery: FetchItemByQuery = (query, user = true) => API.get(`/posts/search?query=${query}&user=${user}`, headers);
export const fetchUserByQuery: FetchItemByQuery = query => API.get(`/users/search?query=${query}`, headers);
export const createPost: CreatePostAPI = formdata => API.post("/posts", formdata);
export const LikePost: LikePostAPI = (id, name, image) => API.patch(`/posts/${id}/like?name=${name}&image=${image}`, headers);
export const createUser: CreateUserAPI = formData => API.post("/users", formData);
export const updateProfile: UpdateProfileAPI = (id, user) => API.patch(`/users/${id}`, user);
