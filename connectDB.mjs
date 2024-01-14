import mongoose from "mongoose";

const connectMongoDB = (uri) => {
  return mongoose.connect(uri);
};
export default connectMongoDB;
