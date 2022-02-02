const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Name: String,
  Email: String,
  ReferredUser: String,
  isPaymentMade: Boolean,
  TotalEarnings: Number,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
