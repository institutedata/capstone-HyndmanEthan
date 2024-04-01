let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.cardController.getCard(res);
});

router.post("/create", (req, res) => {
  Controllers.cardController.createCard(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.cardController.updateCard(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.cardController.deleteCard(req, res);
});

module.exports = router;

