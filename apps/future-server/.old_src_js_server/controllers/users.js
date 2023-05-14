import UserModel from "../models/usersModel.js";

/** @implemented **/
// export const getUsers = async (req, res) => {
//   const { limit, page } = req.query;

//   try {
//     const LIMIT = Number(limit) || 8;
//     const startIndex = (Number(page) - 1) * LIMIT;

//     const users = await UserModel.find().limit(LIMIT).skip(startIndex).lean();

//     res.code(200);
//     return users;
//   } catch (error) {
//     res.code(404);
//     return error.message;
//   }
// };

/** @implemented **/
// export const createUser = async (req, res) => {
//   const user = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

//   const userExists = !!(await UserModel.find({ username: user.username })).length;

//   if (userExists) {
//     res.code(204);
//     return "User already exists";
//   }

//   const newUser = new UserModel(user);

//   try {
//     newUser.save();

//     res.code(201);
//     return newUser;
//   } catch (error: any) {
//     res.code(500);
//     return error.message;
//   }
// };

/** @not_implemented **/
export const getUserByName = async (req, res) => {
  const { name, exact } = req.query;

  try {
    const users = await UserModel.find({ username: exact === "true" ? name : new RegExp(name, "i") }).lean();

    res.code(200);
    return users;
  } catch (error) {
    res.code(404);
    return error.message;
  }
};

/** @not_implemented **/
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  try {
    await UserModel.findByIdAndUpdate(id, { ...user, id }, { new: true });

    res.code(204);
  } catch (error) {
    res.code(400);
    return error.message;
  }
};
