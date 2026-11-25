import mongoose from "mongoose";
import { DB_NAME } from "../constants";

export const ConnsctDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
    console.log("Database Connected Succesfully", connectionInstance.connection.host);
  } catch (error) {
    console.error("Database Connection error", error);
    process.exit(1);
  }
};
