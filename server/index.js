import Fastify from "fastify";
import cors from "@fastify/cors";
import compression from "@fastify/compress";

import { connect as connectDatabase } from "mongoose";
import { config as configureEnv } from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";

configureEnv();

const CONNECTION_URL = process.env.NODE_PRIVATE_MONGO_DB_CONNECTION_URL;
const PORT = process.env.PORT || 5000;
const HOST = process.env.NODE_ENV === "development" ? "localhost" : "0.0.0.0";
const ORIGIN = process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.NODE_PRIVATE_FRONTEND_WEB_URL;

const fastify = Fastify({ logger: false });

await fastify.register(compression, {
  encodings: ["gzip", "br", "deflate"],
});
await fastify.register(cors, {
  origin: ORIGIN,
  methods: ["GET", "POST", "PATCH"],
});

fastify.get("/", (_, res) => res.status(200).send());

await fastify.register(postRoutes);
await fastify.register(userRoutes);

await connectDatabase(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

fastify.listen({ port: PORT, host: HOST }, (error, address) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  console.log(`Server running on: ${address}`);
});
