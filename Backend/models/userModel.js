const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserDetailsScehma = new Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
  }, {
    collection: "UserInfo",
  }
);

const User = mongoose.model("UserInfo", UserDetailsScehma);

module.exports = User;
