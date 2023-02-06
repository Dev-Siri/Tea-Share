import { createPost, getPosts, getPostsBySearchTerm, likePost } from "../controllers/posts.js";
const postRoutes = async (fastify) => {
    fastify.get("/posts", getPosts);
    fastify.post("/posts", createPost);
    fastify.get("/posts/search", getPostsBySearchTerm);
    fastify.patch("/posts/:id/like", likePost);
};
export default postRoutes;
