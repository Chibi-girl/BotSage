const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Model for users to be stored in database
const auths = new Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
    faculty: { type: Boolean }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Auths",auths);
