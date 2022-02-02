const express = require("express");
const port = 3000 || process.env.PORT;
const mongoose = require("mongoose");
const path = require("path");
const userRouter = require("./routes/user");

const app = express();

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extend: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/bookApp", {
    // useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err));

app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
