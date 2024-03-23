"use strict";
const bcrypt = require("bcrypt");
const generateToken = require("../config/jwtGenerateToken");
let Models = require("../models"); //matches index.js

const getVendors = (res) => {
  //finds all Vendors
  Models.Vendor.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createVendor = (data, res) => {
  // Salting and hashing the vendor password
  bcrypt.hash(data.password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res
        .status(500)
        .json({ result: 500, error: "Error hashing password" });
    }

    data.password = hashedPassword;

    // Creating a new vendor with hashed password
    new Models.Vendor(data)
      .save()
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
        console.error("Error saving vendor:", err);
        res.status(500).json({ result: 500, error: err.message });
      });
  });
};

const updateVendor = (req, res) => {
  //updates the Vendor matching the ID from the param   using JSON data POSTed in request body
  console.log(req.body);
  Models.Vendor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteVendor = (req, res) => {
  //deletes the Vendor matching the ID from the param
  Models.Vendor.findByIdAndDelete(req.params.id)
        .then((data) => {
      if (!data) {
        // If vendor with the given ID doesn't exist
        return res.status(404).send({ result: 404, error: "Vendor not found" });
      }
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const loginVendor = (req, res) => {
  const { emailId, password } = req.body;

  Models.Vendor.findOne({ emailId: emailId })
    .then((vendor) => {
      if (!vendor) {
        return res.status(400).send("Wrong email or password");
      }

      bcrypt
        .compare(password, vendor.password)
        .then((match) => {
          if (match) {
            // Generate JWT token
            const token = generateToken(vendor._id);

            res.json({
              token: token,
              message: `Successful login, welcome ${vendor.cafe}`,
            });
          } else {
            res.status(400).send("Wrong email or password");
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

module.exports = {
  getVendors,
  createVendor,
  updateVendor,
  deleteVendor,
  loginVendor
};
