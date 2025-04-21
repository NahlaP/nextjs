import mongoose from "mongoose";

export async function connect() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    await mongoose.connect(process.env.MONGO_URI!);

    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error. Please make sure MongoDB is running. ", err);
      process.exit(1);
    });

  } catch (error) {
    console.error("Something went wrong while connecting to MongoDB");
    console.error(error);
    process.exit(1);
  }
}

export default connect;
