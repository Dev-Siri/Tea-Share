import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: String,
  email: String,
  image: String,
});

const UserModel = mongoose.model("registeredUsers", UserSchema);

export default UserModel;
