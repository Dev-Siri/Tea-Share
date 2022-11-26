import { Types } from "mongoose";
import PostModel from "../models/postsModel.js";
// import dayjs from "dayjs";

export const getPosts = async (req, res) => {
  const { limit } = req.query;

  try {
    const posts = limit ? await PostModel.find().limit(parseInt(limit)) : await PostModel.find();

    const postsByDateCreated = posts.sort((prevPost, nextPost) => new Date(nextPost.createdAt) - new Date(prevPost.createdAt));

    res.status(200).json(postsByDateCreated);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostsBySearchTerm = async (req, res) => {
  const { query, user } = req.query;

  try {
    const findObject = Boolean(user) ? [{ author: query }] : [{ _id: query }];

    const posts = await PostModel.find({ $or: findObject });

    res.json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostModel({
    ...post,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  const { name, image } = req.query;

  if (!Types.ObjectId.isValid(id)) return res.status(404).send("No posts with that ID");

  const post = await PostModel.findById(id);

  const alreadyLiked = post?.people?.includes(name);

  if (alreadyLiked) return res.status(304);

  post?.people?.push(name);
  post?.peopleImage?.push(image);

  const updatedPost = await PostModel.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.json(updatedPost);
};
