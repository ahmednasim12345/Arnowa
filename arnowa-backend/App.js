const express = require("express");
const cors = require("cors");
const app = express();
const env = require("dotenv");
const mongoose = require("mongoose");
env.config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@arnowa.tv4fj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database Connected");
  });

const userRouter = require("./src/Router/UserRouter/UserRouter");

app.use("/api", userRouter);

app.listen(port, () => {
  console.log("this app is listining ", `${port}`);
});
