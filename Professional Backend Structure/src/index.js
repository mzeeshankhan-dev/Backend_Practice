// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import { ConnsctDB } from "./DB";

dotenv.config({
  path: "./env",
});

async function startServer() {
  await ConnsctDB();
}













/* Is Tareqe mai ham apna Database be connect karte hai aur 
   aur server be run karte hai aik he file mai index.js mai 
*/

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import exprees from "express";

const app = exprees();

(async () => {
  try {
    await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);    //  DataBase Connected 

    app.on("error", (error) => {
      console.error("Exprees Server Error", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server listen On Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Database Connecting Error", error);
    throw new error();
  }
})();
*/
