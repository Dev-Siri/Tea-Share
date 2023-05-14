import { Types, } from "mongoose";
import PostModel from "../models/postsModel.js";

/**
 * @implemented
 * export const getPosts = async (req, res) => {
 *   const { limit, page } = req.query;
 *
 *   try {
 *     const LIMIT = Number(limit) || 8;
 *     const startIndex = (Number(page) - 1) * LIMIT;
 *
 *     const posts = await PostModel.find().limit(LIMIT).sort({ createdAt: -1 }).skip(startIndex).lean();
 *
 *     res.code(200);
 *     return posts;
 *   } catch (error) {
 *     res.code(404);
 *     return error.message;
 *   }
 * };
 *
 */

/** @not_implemented **/
export const getPostsBySearchTerm = async (req, res) => {
  const { q, fromUser } = req.query;

  try {
    const queryRegex = new RegExp(q, "i");
    let queryObject = Types.ObjectId.isValid(q) ? { _id: q } : { $or: [{ title: queryRegex }, { description: queryRegex }] };

    if (fromUser === "true") queryObject = { author: q };

    const posts = await PostModel.find(queryObject).sort({ createdAt: -1 }).lean();

    res.code(200);
    return posts;
  } catch (error) {
    res.code(404);
    return error.message;
  }
};

/**
 * @implemented
 * export const createPost = async (req, res) => {
 *   const post = typeof req.body === "string" ? (JSON.parse(req.body)) : req.body;
 *
 *   const newPost = new PostModel({
 *     ...post,
 *     createdAt: new Date().toISOString(),
 *   });
 *
 *   try {
 *     await newPost.save();
 *
 *     res.code(201);
 *     return newPost;
 *   } catch (error) {
 *     res.code(409);
 *     return error.message;
 *   }
 * };
 */

/** @not_implemented **/
export const likePost = async (req, res) => {
  const { id } = req.params;
  const { name, image } = typeof req.body === "string" ? (JSON.parse(req.body)) : req.body;

  try {
    if (!Types.ObjectId.isValid(id)) {
      res.code(404);
      return "No posts with that ID";
    }

    const post = (await PostModel.findById(id).lean());

    const alreadyLiked = post.people.includes(name);

    if (alreadyLiked) return res.status(304);

    post.people.push(name);
    post.peopleImage.push(image);

    const updatedPost = (await PostModel.findByIdAndUpdate(id, post, { new: true }).lean());

    res.code(200);
    return updatedPost;
  } catch (error) {
    res.code(304);
    return error.message;
  }
};