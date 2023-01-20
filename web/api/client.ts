import type {
  FetchItemByQuery,
  FetchPostsAPI,
  CreatePostAPI,
  LikePostAPI,
  CreateUserAPI,
  FetchUsersAPI,
  UpdateProfileAPI,
  Post,
  MongoDBUser,
} from "../types";

const url: string = process.env.NEXT_PUBLIC_BACKEND_URL as string;

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

export const fetchPostByQuery: FetchItemByQuery<Post[]> = async (query, user = true) => {
  const response: Response = await fetch(`${url}/posts/search?query=${query}&user=${user}`);
  const posts = await response.json();

  return posts;
};

export const fetchUserByQuery: FetchItemByQuery<MongoDBUser> = async query => {
  const response: Response = await fetch(`${url}/users/search?query=${query}`);
  const user: MongoDBUser = await response.json();

  return user;
};

export const createPost: CreatePostAPI = async formdata => fetch(`${url}/posts`, { method: "POST", body: JSON.stringify(formdata) });
export const LikePost: LikePostAPI = async (id, name, image) => fetch(`${url}/posts/${id}/like?name=${name}&image=${image}`, { method: "PATCH" });
export const createUser: CreateUserAPI = async formData => fetch(`${url}/users`, { method: "POST", body: JSON.stringify(formData) });
export const updateProfile: UpdateProfileAPI = async (id, user) => fetch(`${url}/users/${id}`, { method: "PATCH", body: JSON.stringify(user) });
