"use strict";
let Models = require("../models"); //matches index.js
// TODO: add getbyid


const getStamps = (res) => {
  //finds all Stamps
  Models.Stamp.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};



const createStamp = (data, res) => {
    //creates a new Vendor using JSON data POSTed in request body
    console.log(data);
    new Models.Stamp(data)
      .save()
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };



const updateStamp = (req, res) => {
  //updates the Stamp matching the ID from the param   using JSON data POSTed in request body
  console.log(req.body);
  Models.Stamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteStamp = (req, res) => {
  //deletes the Stamp matching the ID from the param
  Models.Stamp.findByIdAndDelete(req.params.id)
  .then((data) => {
    if (!data) {
      // If Stamp with the given ID doesn't exist
      return res.status(404).send({ result: 404, error: "Stamp not found" });
    }
    res.send({ result: 200, data: data });
  })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getStamps,
  createStamp,
  updateStamp,
  deleteStamp,
};
