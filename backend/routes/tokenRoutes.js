let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.tokenController.getTokens(res);
});

router.post("/create", (req, res) => {
  Controllers.tokenController.createToken(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.tokenController.updateToken(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.tokenController.deleteToken(req, res);
});

module.exports = router;
