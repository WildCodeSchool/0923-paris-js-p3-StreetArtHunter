const router = require("express").Router();

const imageController = require("../controllers/image.controller");
const fileUpload = require("../middlewares/fileUpload");
const auth = require("../middlewares/auth");

router.post("/image", auth.isAuth, fileUpload.any(), imageController.add);
router.get("/image", auth.isAuth, imageController.getWorks);
router.get("/image", imageController.getAll);

module.exports = router;
