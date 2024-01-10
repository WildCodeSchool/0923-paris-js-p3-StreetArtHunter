const router = require("express").Router();

const userController = require("../controllers/user.controllers");
const auth = require("../middlewares/auth");

router.post("/user", auth.hashPassword, userController.add);

module.exports = router;
