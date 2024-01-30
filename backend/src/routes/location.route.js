const router = require("express").Router();

const locationController = require("../controllers/location.controller");

router.get("/location", locationController.getAll);
router.get("/location/:location", locationController.getSpotZoneById);

module.exports = router;
