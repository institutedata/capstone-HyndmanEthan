let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.vendorController.getVendors(res);
});

router.post("/create", (req, res) => {
  Controllers.vendorController.createVendor(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.vendorController.updateVendor(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.vendorController.deleteVendor(req, res);
});

router.post("/login", (req, res) => {
  Controllers.vendorController.loginVendor(req, res);
});

module.exports = router;
