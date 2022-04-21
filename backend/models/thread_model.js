const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Model for users to be stored in database
const doubts = new Schema(
  {
    question: { type: String },
    answers: [{ type: String }],
    tags:[ { type: String } ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doubts",doubts);
