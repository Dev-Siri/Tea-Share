import express from "express";
import { getUsers, createUser, getUserBySearchTerm, updateUser } from "../controllers/users";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.get("/search", getUserBySearchTerm);

export default router;
