import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.CONNECTION_DATABASE as string)
    .then((_res) => {
      console.info("Database Connected");
    })
    .catch((err) => console.error(err));
};

export default dbConnection;
