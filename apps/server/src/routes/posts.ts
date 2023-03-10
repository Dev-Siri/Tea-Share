import { createPost, getPosts, getPostsBySearchTerm, likePost } from "../controllers/posts.js";

import type { FastifyPluginCallback } from "fastify";

const postRoutes: FastifyPluginCallback = async fastify => {
  fastify.get("/posts", getPosts);
  fastify.post("/posts", createPost);
  fastify.get("/posts/search", getPostsBySearchTerm);
  fastify.patch("/posts/:id/like", likePost);
};

export default postRoutes;
