import axios from "axios";
import type { FetchItemByQuery, FetchPostsType, CreatePostType, LikePostType, CreateUserType, FetchUsersType } from "../types";
import { useStateContext } from "../context/StateContext";

const API = axios.create({ baseURL: process.env.NEXT_PUBLIC_BACKEND_URL });

export const fetchPosts: FetchPostsType = (limit) => API.get(`/posts?limit=${limit}`);
export const fetchUsers: FetchUsersType = () => API.get("/users");
export const fetchPostBySearchTerm: FetchItemByQuery = (query, user = true) => API.get(`/posts/search?query=${query}&user=${user}`);
export const fetchUserBySearchTerm: FetchItemByQuery = (query) => API.get(`/users/search?query=${query}`);
export const createPost: CreatePostType = (formdata) => API.post("/posts/create", formdata);
export const LikePost: LikePostType = (id, name, image) => API.patch(`/posts/${id}/like?name=${name}&image=${image}`);
export const createUser: CreateUserType = (formData) => API.post("/users/create", formData);