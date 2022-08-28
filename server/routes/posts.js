import express from "express";
import { getPosts, getPostsBySearchTerm, createPost, likePost } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/search', getPostsBySearchTerm);
router.patch('/:id/like', likePost);

export default router;