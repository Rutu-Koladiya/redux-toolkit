import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: String,
  },
  { timestamps: true }
);

export const TodoModel = mongoose.Model("Todo", todoSchema);
