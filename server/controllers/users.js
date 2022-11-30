import UserModel from "../models/usersModel.js";

export const getUsers = async (req, res) => {
  const { limit } = req.query;

  try {
    let users;

    if (limit) {
      users = await UserModel.find().limit(parseInt(`${limit}`));
    } else {
      users = await UserModel.find();
    }

    res.code(200);
    return users;
  } catch (error) {
    res.code(404);
    return { message: error.message };
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  const userExists = (await UserModel.find({ username: user.username })).length;

  if (userExists) {
    res.code(204);

    return { message: "User already exists" };
  }

  const newUser = new UserModel(user);

  try {
    newUser.save();

    res.code(201);

    return newUser;
  } catch (error) {
    res.code(500);
    return { message: error.message };
  }
};

export const getUserBySearchTerm = async (req, res) => {
  const { query } = req.query;

  try {
    const user = await UserModel.find({ username: query });

    return user[0];
  } catch (error) {
    res.code(404);
    return { message: error.message };
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  try {
    await UserModel.findByIdAndUpdate(id, { ...user, id }, { new: true });

    res.code(204);
    return { message: "User updated successfully" };
  } catch (error) {
    res.code(400);
    return { message: error.message };
  }
};
