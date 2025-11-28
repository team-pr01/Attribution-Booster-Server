import { Schema, model } from "mongoose";
import type { TBlog } from "./blog.interface";

const BlogSchema = new Schema<TBlog>(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    overview: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = model<TBlog>("Blog", BlogSchema);

export default Blog;