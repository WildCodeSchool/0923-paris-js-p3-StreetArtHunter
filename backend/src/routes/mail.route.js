const router = require("express").Router();

const mailController = require("../controllers/mail.controller");

router.post("/mail/compliment", mailController.compliment);

module.exports = router;
