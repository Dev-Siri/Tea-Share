import { Schema, model } from "mongoose";
const UserSchema = new Schema({
    username: String,
    email: String,
    image: String
});
const UserModel = model("registeredUsers", UserSchema);
export default UserModel;
