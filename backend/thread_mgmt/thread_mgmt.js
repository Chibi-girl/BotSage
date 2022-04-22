const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const threads = require("../models/thread_model.js");



//function for fetching all discussion threads from the database
exports.getThreads = async (req, res) => {
 threads.find({ }).then(
    function (threads) {
      if (threads === null) {
          console.log("No threads found");
        res.status(404).send("Thread not found!");
      } else {
         res.status(200).send(threads);
      }
    },
    function (err) {
    console.log(err);
      res.status.send(err);
    }
  )
  .catch((err) => {
        res.status(404).send("Error getting thread list");
      });
};




//function for adding a new thread to the database
exports.postThread = async (req,res) => {
obj={question: req.body.question , answers: req.body.answers , tags: req.body.tags };
 let new_thread = new threads(obj);
      if (!new_thread) {
        return res.status(400).json({ success: false, error: "Schema failed" });
      }
      new_thread
        .save()
        .then(() => {
          return res.status(201).send(new_thread);
        })
        .catch((error) => {
          return res.status(404).send("Error in uploading discussion thread to database.");
        });
}




