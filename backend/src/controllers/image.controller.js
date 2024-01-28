const imageModel = require("../models/image.model");

const add = async (req, res, next) => {
  try {
    const image = req.body;
    image.URL_image = `${req.protocol}://${req.get("host")}/upload/${
      req.files[0].filename
    }`;
    // image.User_id = req.body.userID;

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
    const [image] = await imageModel.findAll();
    res.status(200).json(image);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
  getAll,
};
