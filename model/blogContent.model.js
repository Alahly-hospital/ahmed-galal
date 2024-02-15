const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
  blog: { type: mongoose.Types.ObjectId, required: true, ref: "blog" },
  title: { type: String, trim: true },
  content: { type: String },
  image: { type: String, trim: true },
  video: { type: String, trim: true },
  type: { type: String, required: true, trim: true },
  list: [{ type: String, trim: true }],
});

const Blogs = mongoose.model("blog-content", blogsSchema);
module.exports = Blogs;
