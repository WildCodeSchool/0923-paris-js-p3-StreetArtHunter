const router = require("express").Router();
const { hashPassword } = require("../middleware/auth");

const useController = require("../controllers/user.controllers");

router.post("/user", hashPassword, useController.add);
router.post("/user/login", useController.login);

module.exports = router;
