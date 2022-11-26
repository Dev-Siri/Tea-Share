import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import compression from "compression";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();

app.use(compression());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: process.env.NODE_PRIVATE_FRONTEND_WEB_URL,
    methods: ["GET", "POST", "PATCH"],
  })
);

app.get("/", (_, res) => res.status(200).send());

app.use("/posts", postRoutes);
app.use("/users", userRoutes);

const CONNECTION_URL = `${process.env.NODE_PRIVATE_MONGO_DB_CONNECTION_URL}`;
const PORT = `${process.env.PORT}` || 5000;

await connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
