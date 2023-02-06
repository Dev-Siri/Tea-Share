import UserModel from "../models/usersModel.js";

import type { RequestHandler } from "../types/controllers.js";
import type { DatabaseDocument, User } from "../types/models.js";

export const getUsers: RequestHandler<User[]> = async (req, res) => {
  const { limit, page } = req.query;

  try {
    const LIMIT = Number(limit) || 8;
    const startIndex = (Number(page) - 1) * LIMIT;

    const users: User[] = await UserModel.find().limit(LIMIT).skip(startIndex).lean();

    res.code(200);
    return users;
  } catch (error: any) {
    res.code(404);
    return error.message as string;
  }
};

export const createUser: RequestHandler<DatabaseDocument<User>, User> = async (req, res) => {
  const user: User = typeof req.body === "string" ? (JSON.parse(req.body) as User) : req.body;

  const userExists: boolean = !!(await UserModel.find({ username: user.username })).length;

  if (userExists) {
    res.code(204);
    return "User already exists";
  }

  const newUser: DatabaseDocument<User> = new UserModel(user);

  try {
    newUser.save();

    res.code(201);
    return newUser;
  } catch (error: any) {
    res.code(500);
    return error.message;
  }
};

export const getUserBySearchTerm: RequestHandler<User> = async (req, res) => {
  const { query } = req.query;

  try {
    const users: User[] = await UserModel.find({ username: query }).lean();

    res.code(200);
    return users[0];
  } catch (error: any) {
    res.code(404);
    return error.message as string;
  }
};

export const updateUser: RequestHandler<void> = async (req, res) => {
  const { id } = req.params;
  const user: User = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  try {
    await UserModel.findByIdAndUpdate(id, { ...user, id }, { new: true });

    res.code(204);
  } catch (error: any) {
    res.code(400);
    return error.message as string;
  }
};