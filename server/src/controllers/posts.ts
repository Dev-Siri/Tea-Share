import { Types } from "mongoose";
import PostModel from "../models/postsModel.js";

import type { RequestHandler } from "../types/controllers.js";
import type { DatabaseDocument, Post, User } from "../types/models.js";

export const getPosts: RequestHandler<Post[]> = async (req, res) => {
  const { limit, page } = req.query;

  try {
    const LIMIT = Number(limit) || 8;
    const startIndex = (Number(page) - 1) * LIMIT;

    const posts: Post[] = await PostModel.find().limit(LIMIT).sort({ createdAt: -1 }).skip(startIndex).lean();

    res.code(200);
    return posts;
  } catch (error: any) {
    res.code(404);
    return error.message as string;
  }
};

export const getPostsBySearchTerm: RequestHandler<Post[]> = async (req, res) => {
  const { query, user } = req.query;

  try {
    const findObject: [{ author: string } | { _id: string }] = user === "true" ? [{ author: query }] : [{ _id: query }];

    const posts: Post[] = await PostModel.find({ $or: findObject }).sort({ createdAt: -1 }).lean();

    res.code(200);
    return posts;
  } catch (error: any) {
    res.code(404);
    return error.message as string;
  }
};

export const createPost: RequestHandler<DatabaseDocument<Post>, Post> = async (req, res) => {
  const post: Post = typeof req.body === "string" ? (JSON.parse(req.body) as Post) : req.body;

  const newPost: DatabaseDocument<Post> = new PostModel({
    ...post,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();

    res.code(201);
    return newPost;
  } catch (error: any) {
    res.code(409);
    return error.message as string;
  }
};

export const likePost: RequestHandler<Post, Omit<User, "username"> & { name: string }> = async (req, res) => {
  const { id } = req.params;
  const { name, image } = typeof req.body === "string" ? (JSON.parse(req.body) as Omit<User, "username"> & { name: string }) : req.body;

  try {
    if (!Types.ObjectId.isValid(id)) {
      res.code(404);
      return "No posts with that ID";
    }

    const post: Post = await PostModel.findById(id).lean();

    const alreadyLiked: boolean = post.people.includes(name);

    if (alreadyLiked) return res.status(304);

    post.people.push(name);
    post.peopleImage.push(image);

    const updatedPost: Post = await PostModel.findByIdAndUpdate(id, post, { new: true }).lean();

    res.code(200);
    return updatedPost;
  } catch (error: any) {
    res.code(304);
    return error.message as string;
  }
};
