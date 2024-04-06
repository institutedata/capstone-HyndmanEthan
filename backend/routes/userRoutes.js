let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
const authUser = require("../middleware/authUser").authUser;


router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

router.post("/login", (req, res) => {
  Controllers.userController.loginUser(req, res);
});
router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;
