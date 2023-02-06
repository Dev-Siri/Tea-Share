import type {
  CreatePostAPI,
  CreateUserAPI,
  FetchItemByQuery,
  FetchPostsAPI,
  FetchUsersAPI,
  LikePostAPI,
  MongoDBUser,
  Post,
  UpdateProfileAPI,
} from "../types";

const url: string = process.env.NEXT_PUBLIC_BACKEND_URL as string;

const headers = {
  "Content-Type": "application/json",
};

export const fetchPosts: FetchPostsAPI = async (page, limit) => {
  const response: Response = await fetch(`${url}/posts?page=${page}&limit=${limit}`);
  const posts: Post[] = await response.json();
  return posts;
};

export const fetchUsers: FetchUsersAPI = async (page, limit) => {
  const response: Response = await fetch(`${url}/users?page=${page}&limit=${limit}`);
  const users: MongoDBUser[] = await response.json();

  return users;
};

export const fetchPostByQuery: FetchItemByQuery<Post[]> = async (query, fromUser = true) => {
  const response: Response = await fetch(`${url}/posts/search?query=${query}&user=${fromUser}`);
  const posts = await response.json();

  return posts;
};

export const fetchUserByQuery: FetchItemByQuery<MongoDBUser> = async query => {
  const response: Response = await fetch(`${url}/users/search?query=${query}`);
  const user: MongoDBUser = await response.json();

  return user;
};

export const createPost: CreatePostAPI = async formdata =>
  fetch(`${url}/posts`, {
    method: "POST",
    headers,
    body: JSON.stringify(formdata),
  });

export const createUser: CreateUserAPI = async formData =>
  fetch(`${url}/users`, {
    method: "POST",
    headers,
    body: JSON.stringify(formData),
  });

export const updateProfile: UpdateProfileAPI = async (id, user) =>
  fetch(`${url}/users/${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(user),
  });

export const LikePost: LikePostAPI = async (id, name, image) =>
  fetch(`${url}/posts/${id}/like?name=${name}&image=${image}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ name, image }),
  });
