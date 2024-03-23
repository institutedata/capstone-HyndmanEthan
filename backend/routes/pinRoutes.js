let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/pin", (req, res) => {
  Controllers.pinController.getPins(res);
});

router.post("/create", (req, res) => {
  Controllers.pinController.createPin(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.pinController.updatePin(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.pinController.deletePin(req, res);
});

module.exports = router;
