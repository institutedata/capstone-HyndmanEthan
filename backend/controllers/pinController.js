"use strict";
let Models = require("../models"); //matches index.js
// TODO: add getbyid


const getPins = (res) => {
  //finds all Pins
  Models.Pin.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};



const createPin = (data, res) => {
    //creates a new Vendor using JSON data POSTed in request body
    console.log(data);
    new Models.Pin(data)
      .save()
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };



const updatePin = (req, res) => {
  //updates the Pin matching the ID from the param   using JSON data POSTed in request body
  console.log(req.body);
  Models.Pin.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deletePin = (req, res) => {
  //deletes the Pin matching the ID from the param
  Models.Pin.findByIdAndDelete(req.params.id)
  .then((data) => {
    if (!data) {
      // If vendor with the given ID doesn't exist
      return res.status(404).send({ result: 404, error: "Pin not found" });
    }
    res.send({ result: 200, data: data });
  })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPins,
  createPin,
  updatePin,
  deletePin,
};
