import { getUserByName, updateUser } from "../controllers/users.js";

const userRoutes = async fastify => {
  /** @implemented **/
  // fastify.get("/users", getUsers);
  // fastify.post("/users", createUser);
  fastify.patch("/users/:id", updateUser);
  fastify.get("/users/search", getUserByName);
};

export default userRoutes;
