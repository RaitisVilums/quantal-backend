import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-route";

const app = express();
app.use(express.json());
app.use("/api/user", router);

mongoose
  .connect(
    "mongodb+srv://admin:Ko5a2MDg@quantallake.c0krecy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Server running on port 5000"))
  .catch((err) => console.log(err));
