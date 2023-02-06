import { createUser, getUserBySearchTerm, getUsers, updateUser } from "../controllers/users.js";
const userRoutes = async (fastify) => {
    fastify.get("/users", getUsers);
    fastify.post("/users", createUser);
    fastify.patch("/users/:id", updateUser);
    fastify.get("/users/search", getUserBySearchTerm);
};
export default userRoutes;
