import { Router } from "express";
import { getUsers, createUser, getUserBySearchTerm, updateUser } from "../controllers/users.js";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.get("/search", getUserBySearchTerm);

export default router;
