import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  author: String,
  authorImage: String,
  people: {
    type: [String],
    default: []
  },
  peopleImage: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const PostModel = mongoose.model("postMessage", PostSchema);

export default PostModel;
