const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  username: String,
  fullname: String,
  password: String,
  role: String,
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", user);
module.exports = User;
