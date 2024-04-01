"use strict";
let Models = require("../models"); //matches index.js

const getTokens = (res) => {
  //finds all Tokens
  Models.Token.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};



const createToken = (data, res) => {
    //creates a new Vendor using JSON data POSTed in request body
    console.log(data);
    new Models.Token(data)
      .save()
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };



const updateToken = (req, res) => {
  //updates the Token matching the ID from the param   using JSON data POSTed in request body
  console.log(req.body);
  Models.Token.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteToken = (req, res) => {
  //deletes the Token matching the ID from the param
  Models.Token.findByIdAndDelete(req.params.id)
  .then((data) => {
    if (!data) {
      // If Token with the given ID doesn't exist
      return res.status(404).send({ result: 404, error: "Token not found" });
    }
    res.send({ result: 200, data: data });
  })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getTokens,
  createToken,
  updateToken,
  deleteToken,
};
