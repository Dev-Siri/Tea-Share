import { createUser, getUserByName, getUsers, updateUser } from "../controllers/users.js";

import type { FastifyPluginCallback } from "fastify";

const userRoutes: FastifyPluginCallback = async fastify => {
  fastify.get("/users", getUsers);
  fastify.post("/users", createUser);
  fastify.patch("/users/:id", updateUser);
  fastify.get("/users/search", getUserByName);
};

export default userRoutes;
