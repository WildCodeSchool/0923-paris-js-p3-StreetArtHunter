const router = require("express").Router();

const userController = require("../controllers/user.controllers");
const auth = require("../middlewares/auth");

router.post("/user", auth.hashPassword, userController.add);
router.post("/user/login", userController.login);
router.get("/user/:id", auth.hashPassword, userController.getById);
router.get("/user", auth.isAuth, userController.getAll);

module.exports = router;
