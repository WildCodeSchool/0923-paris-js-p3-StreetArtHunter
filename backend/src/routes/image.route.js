const router = require("express").Router();

const imageController = require("../controllers/image.controller");
const fileUpload = require("../middlewares/fileUpload");
const auth = require("../middlewares/auth");

router.post("/image", auth.isAuth, fileUpload.any(), imageController.add);
router.get("/image", imageController.getAll);
router.get("/image/user", auth.isAuth, imageController.getByUserId);
router.get(
  "/image/unvalidate",
  auth.isAuth,
  auth.isAdmin,
  imageController.getAllNoValidate
);

module.exports = router;
