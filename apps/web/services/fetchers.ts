import type {
  CreatePostAPI,
  CreateUserAPI,
  FetchPostsAPI,
  FetchPostsByQuery,
  FetchUsersAPI,
  FetchUsersByName,
  LikePostAPI,
  MongoDBUser,
  Post,
  UpdateProfileAPI,
} from "@/types";

const url = process.env.NEXT_PUBLIC_BACKEND_URL!;

const headers: Record<string, string> = {
  "Content-Type": "application/json",
};

export const fetchPosts: FetchPostsAPI = async (page, limit, cacheBehaviour) => {
  const response = await fetch(`${url}/posts?page=${page}&limit=${limit}`, cacheBehaviour);

  if (!response.ok) throw new Error(`Failed to fetch posts, The server returned a status code of ${response.status}.`);

  const posts: Post[] = await response.json();

  return posts;
};

export const fetchUsers: FetchUsersAPI = async (page, limit, cacheBehaviour) => {
  const response = await fetch(`${url}/users?page=${page}&limit=${limit}`, cacheBehaviour);

  if (!response.ok) throw new Error(`Failed to fetch users, The server returned a status code of ${response.status}.`);

  const users: MongoDBUser[] = await response.json();

  return users;
};

export const fetchPostsByQuery: FetchPostsByQuery = async (query, cacheBehaviour, fromUser = true) => {
  try {
    const response = await fetch(`${url}/posts/search?q=${query}&fromUser=${fromUser}`, cacheBehaviour);
    const posts: Post[] = await response.json();

    return posts;
  } catch {
    return null;
  }
};

export const fetchUsersByName: FetchUsersByName = async (name, cacheBehaviour, exact = false) => {
  try {
    const response = await fetch(`${url}/users/search?name=${name}&exact=${exact}`, cacheBehaviour);
    const users: MongoDBUser[] = await response.json();

    return users;
  } catch {
    return null;
  }
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

export const likePost: LikePostAPI = async (id, name, image) =>
  fetch(`${url}/posts/${id}/like`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ name, image }),
  });
