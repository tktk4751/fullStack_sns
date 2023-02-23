const express = require("express");
const app = express();
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postsRouter = require("./routes/posts");
const uploadRouter = require("./routes/upload");
const PORT = 3333;
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

//データベース接続
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("データベースと接続中");
  })
  .catch((err) => {
    console.log(err);
  });

//ミドルウェア
app.use("/images", express.static(path.join(__dirname, "/public/images")));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api/upload", uploadRouter);

app.get("/", (req, res) => {
  res.send("hello.express");
});

app.listen(PORT, () => console.log("サーバーが起動しました"));
