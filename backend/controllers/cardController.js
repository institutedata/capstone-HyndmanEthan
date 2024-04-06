"use strict";
let Models = require("../models"); //matches index.js

const getCards = (res) => {
  //finds all Cards
  Models.Card.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};



const createCard = (data, res) => {
    //creates a new Vendor using JSON data POSTed in request body
    console.log(data);
    new Models.Card(data)
      .save()
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };



const updateCard = (req, res) => {
  //updates the Card matching the ID from the param   using JSON data POSTed in request body
  console.log(req.body);
  Models.Card.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteCard = (req, res) => {
  //deletes the Card matching the ID from the param
  Models.Card.findByIdAndDelete(req.params.id)
  .then((data) => {
    if (!data) {
      // If vendor with the given ID doesn't exist
      return res.status(404).send({ result: 404, error: "Card not found" });
    }
    res.send({ result: 200, data: data });
  })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getCards,
  createCard,
  updateCard,
  deleteCard,
};