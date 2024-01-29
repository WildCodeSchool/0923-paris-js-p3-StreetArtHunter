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

const getByUserId = async (req, res, next) => {
  try {
    const [workByUserId] = await imageModel.findByUserId(req.body.userID);
    if (workByUserId == null) {
      res.sendStatus(404);
    } else {
      res.json(workByUserId);
    }
  } catch (err) {
    next(err);
  }
};

const getAllNoValidate = async (req, res, next) => {
  try {
    const [works] = await imageModel.findAllNoValidate();
    console.info(works);
    res.json(works);
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const [works] = await imageModel.findAllWUL();
    console.info(works);
    res.json(works);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
  getByUserId,
  getAllNoValidate,
  getAll,
};
