import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("Connected to DB successfully!", connectionInstance.connection.host);
  } catch (err) {
    console.log("Failed to connect DB!", err);
    process.exit(1)
  }
};
