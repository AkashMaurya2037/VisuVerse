import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then((e) => {
      console.log("MongoDB is now connected");
    })
    .catch((error) => {
      console.log(`Error Found at mongoDB : ${error}`);
    });
};

export default connectDB;
