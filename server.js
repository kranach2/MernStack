const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const usersRouter = require("./routes/users");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if(process.env.Node_ENV === "production"){
  app.use (express.static("frontend/build"));
}
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Db connected");
  })
  .catch(err => {
    console.log(err);
  });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb database is connected");
});

app.use("/users", usersRouter);
app.listen(port, () => {
  console.log(`The server is running in port ${port}`);
});
