const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const auths = require("../models/user_model.js");

//logging in user with the credentials provided. If email is not found or password of document mismatches, send error message
exports.loggingUser = async (req, res) => {
    let password = req.body.password;
    auths
            .findOne(
              { email: req.body.email , password: req.body.password}
            )
            .then((data) => {
              if (!data) {
                res
                  .status(404)
                  .send("User was not found/ invalid password!");
              } else {
                res.status(200).send(data);
              }
            })
            .catch((err) => {
              res.status(404).send("Error occured");
            });    
    
};

//register a new user with credentials. If email already exists in database, send error message
exports.registerUser = async (req, res) => {
  let obj = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    faculty: req.body.faculty,
  };
  auths.find({ email: req.body.email }, (err, user) => {
    if (!user.length) {
      //no user with that email exists. It's okay to create a new profile.
      let new_user = new auths(obj);
      if (!new_user) {
        return res.status(404).json({ success: false, error: "Schema failed" });
      }
      new_user
        .save()
        .then(() => {
          return res.status(201).send(new_user);
        })
        .catch((error) => {
          return res.status(404).send("Error: New user registration not done.");
        });
    } else {
      //email already in use. Send error message.
      res.status(400).send("User already exits.");
    }
  });
};
