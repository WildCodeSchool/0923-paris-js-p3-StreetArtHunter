const imageModel = require("../models/image.model");
const locationModel = require("../models/location.model");

const add = async (req, res, next) => {
  try {
    const image = req.body;
    console.info(req.body, req.files);
    image.URL_image = `${req.protocol}://${req.get("host")}/upload/${
      req.files[0].filename
    }`;
    image.User_id = req.userID;
    const [[location]] = await locationModel.getLocationByPostalCode(
      image.postalCode
    );
    image.location_id = location.id;
    const [result] = await imageModel.insert(image);
    if (result.insertId) {
      res.status(201).json(image);
    } else {
      res.sendStatus(422);
    }
  } catch (error) {
    next(error);
  }
};
const getAll = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const [works] = await imageModel.findAll();
    console.info(works);
    // Respond with the items in JSON format
    res.status(200).json(works);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  add,
  getAll,
};
