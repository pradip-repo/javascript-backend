//require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// Load environment variables from .env file
dotenv.config({ path: "./.env" });

// Connect to MongoDB
connectDB()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed !!! ", err);
  });
