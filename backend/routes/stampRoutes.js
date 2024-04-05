let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
const authUser = require("../middleware/authUser");


router.get("/", (req, res) => {
  Controllers.stampController.getStamps(res);
});

router.get("/:user", authUser, (req, res) => {
  Controllers.stampController.getStampByUserId(req, res);
});


router.post("/create/:user", (req, res) => {
  Controllers.stampController.createUserStamp(req.body, res);
});


router.post("/create", (req, res) => {
  Controllers.stampController.createStamp(req.body, res);
});





router.put("/:id", (req, res) => {
  Controllers.stampController.updateStamp(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.stampController.deleteStamp(req, res);
});

module.exports = router;
