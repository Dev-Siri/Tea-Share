import express from "express";

import { getUsers, createUser, getUserBySearchTerm } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/create', createUser);
router.get('/search', getUserBySearchTerm);

export default router;