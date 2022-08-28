import UserModel from "../models/usersModel.js";

export const getUsers = async (req, res) => {
  const { limit } = req.query;

  try {
    let users;

    if(limit) {
      users =  await UserModel.find().limit(parseInt(limit));
    } else {
      users = await UserModel.find()
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  
  const userExists = UserModel.findOne({ username: user.username });

  if(userExists) return res.status(204).json({ message: 'User already exists' });

  const newUser = new UserModel({ ...user });

  try {
    newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserBySearchTerm = async (req, res) => {
  const { query } = req.query;

  try {
    const user = await UserModel.find({ username: query });

    res.json(user[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
