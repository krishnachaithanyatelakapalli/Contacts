var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

module.exports = mongoose.model("Users", userSchema);
