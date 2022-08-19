import UserModel from "../models/usersModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  const newUser = new UserModel({ ...user });

  try {
    newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserBySearchTerm = async (req, res) => {
  const { searchQuery } = req.query;

  try {
    const query = new RegExp(searchQuery);

    const users = await UserModel.find({ username: query });

    res.json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
