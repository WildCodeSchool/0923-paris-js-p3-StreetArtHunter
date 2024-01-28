const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import routes here
const itemRouter = require("./routes/items.route");
const userRouter = require("./routes/user.route");
const imageRouter = require("./routes/image.route");
const locationRouter = require("./routes/location.route");
// Apply routes
router.use(itemRouter);
router.use(userRouter);
router.use(imageRouter);
router.use(locationRouter);

/* ************************************************************************* */

module.exports = router;
