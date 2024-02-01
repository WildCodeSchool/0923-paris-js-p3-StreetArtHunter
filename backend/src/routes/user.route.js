const router = require("express").Router();

const userController = require("../controllers/user.controllers");
const auth = require("../middlewares/auth");

router.post("/user", auth.hashPassword, userController.add);
router.post("/user/login", userController.login);
router.get("/user", auth.isAuth, userController.getAll);
router.get("/user/logout", auth.isAuth, userController.logout);
router.get("/user/me", auth.isAuth, userController.getCurrentUser);

module.exports = router;
