import dotenv from "dotenv";

dotenv.config();

import connectDB from "./db/db.js";

import app from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, (err) => {
      if (err) console.log("Server not connected");
      else
        console.log(
          `Server is connected at http://localhost:${process.env.PORT}`
        );
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed", err);
  });
