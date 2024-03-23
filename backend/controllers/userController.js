"use strict";
const bcrypt = require("bcrypt");
let generateToken = require("../config/jwtGenerateToken");
let Models = require("../models"); //matches index.js


const getUsers = (res) => {
  //finds all users
  Models.User.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const loginUser = (req, res) => {
  const { emailId, password } = req.body;

  Models.User.findOne({ emailId: emailId })
    .then((user) => {
      if (!user) {
        return res.status(400).send("Wrong username or password");
      }

      bcrypt
        .compare(password, user.password)
        .then((match) => {
          if (match) {
            // Generate JWT token
            const token = generateToken(user._id);

            res.json({
              token: token,
              message: `Successful login, welcome ${user.userName}`,
            });
          } else {
            res.status(400).send("Wrong username or password");
          }
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send();
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    });
};


const createUser = (data, res) => {
  bcrypt.hash(data.password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res
        .status(500)
        .json({ result: 500, error: "Error hashing password" });
    }

    data.password = hashedPassword;

    new Models.User(data)
      .save()
      .then((data) => {
        res.status(200).json({ result: 200, data: data });
      })
      .catch((err) => {
        console.error("Error saving user:", err);
        res.status(500).json({ result: 500, error: err.message });
      });
  });
};

const updateUser = (req, res) => {
  //updates the user matching the ID from the param   using JSON data POSTed in request body
  console.log(req.body);
  Models.User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteUser = (req, res) => {
  //deletes the user matching the ID from the param
  Models.User.findByIdAndDelete(req.params.id)
  .then((data) => {
    if (!data) {
      // If user with the given ID doesn't exist
      return res.status(404).send({ result: 404, error: "User not found" });
    }
    res.send({ result: 200, data: data });
  })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUsers,
  loginUser,
  createUser,
  updateUser,
  deleteUser,
};
