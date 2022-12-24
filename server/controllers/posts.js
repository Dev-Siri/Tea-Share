import { Types } from "mongoose";
import PostModel from "../models/postsModel.js";

export const getPosts = async (req, res) => {
  const { limit } = req.query;

  try {
    const posts = limit ? await PostModel.find().limit(parseInt(limit)).sort({ createdAt: -1 }) : await PostModel.find().sort({ createdAt: -1 });

    res.code(200);
    return posts;
  } catch (error) {
    res.code(404);
    return error.message;
  }
};

export const getPostsBySearchTerm = async (req, res) => {
  const { query, user } = req.query;

  try {
    const findObject = user === "true" ? [{ author: query }] : [{ _id: query }];

    const posts = await PostModel.find({ $or: findObject }).sort({ date: -1 });

    return posts;
  } catch (error) {
    res.code(404);
    return error.message;
  }
};

export const createPost = async (req, res) => {
  const { body: post } = req;

  const newPost = new PostModel({
    ...post,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();

    res.code(201);
    return newPost;
  } catch (error) {
    res.code(409);
    return error.message;
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  const { name, image } = req.query;

  if (!Types.ObjectId.isValid(id)) {
    res.code(404);
    return "No posts with that ID";
  }

  const post = await PostModel.findById(id);

  const alreadyLiked = post?.people?.includes(name);

  if (alreadyLiked) return res.status(304);

  post?.people?.push(name);
  post?.peopleImage?.push(image);

  const updatedPost = await PostModel.findByIdAndUpdate(id, post, {
    new: true,
  });

  return updatedPost;
};
