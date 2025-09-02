import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requied: true,
      unique: true,
    },
    email: {
      type: String,
      requied: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      unique: true,
      lowercase: true,
      minLength: 8,
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.Model("User", userSchema);
