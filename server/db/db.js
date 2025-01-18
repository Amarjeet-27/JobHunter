import mongoose from "mongoose";

const connectDB = async () => {
  const url = process.env.DB_URL;
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

export default connectDB;
