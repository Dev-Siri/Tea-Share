import axios from "axios";
import type { FetchItemByQuery, FetchPostsAPI, CreatePostAPI, LikePostAPI, CreateUserAPI, FetchUsersAPI, UpdateProfileAPI } from "../types";

const API = axios.create({ baseURL: process.env.NEXT_PUBLIC_BACKEND_URL });

export const fetchPosts: FetchPostsAPI = limit => API.get(`/posts?limit=${limit}`);
export const fetchUsers: FetchUsersAPI = () => API.get("/users");
export const fetchPostByQuery: FetchItemByQuery = (query, user = true) => API.get(`/posts/search?query=${query}&user=${user}`);
export const fetchUserByQuery: FetchItemByQuery = query => API.get(`/users/search?query=${query}`);
export const createPost: CreatePostAPI = formdata => API.post("/posts", formdata);
export const LikePost: LikePostAPI = (id, name, image) => API.patch(`/posts/${id}/like?name=${name}&image=${image}`);
export const createUser: CreateUserAPI = formData => API.post("/users", formData);
export const updateProfile: UpdateProfileAPI = (id, user) => API.patch(`/users/${id}`, user);
