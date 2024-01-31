const router = require("express").Router();

const imageController = require("../controllers/image.controller");
const fileUpload = require("../middlewares/fileUpload");
const auth = require("../middlewares/auth");

router.post("/image", auth.isAuth, fileUpload.any(), imageController.add);
router.get("/image", imageController.getAllWUL);
router.get("/image/user", imageController.getByUserId);
router.get(
  "/image/unvalidate",
  auth.isAuth,
  auth.isAdmin,
  imageController.getAllNoValidate
);
router.put(
  "/image/:id/validate",
  auth.isAuth,
  auth.isAdmin,
  imageController.approve
);

router.delete(
  "/image/:id/delete",
  auth.isAuth,
  auth.isAdmin,
  imageController.erase
);

module.exports = router;
