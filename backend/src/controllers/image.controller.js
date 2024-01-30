/* eslint-disable consistent-return */
const imageModel = require("../models/image.model");

const add = async (req, res, next) => {
  try {
    const image = req.body;
    image.URL_image = `${req.protocol}://${req.get("host")}/upload/${
      req.files[0].filename
    }`;

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

const getAllWUL = async (req, res, next) => {
  try {
    const [works] = await imageModel.findAll();
    console.info(works);
    res.json(works);
  } catch (err) {
    next(err);
  }
};

const approve = async (req, res, next) => {
  try {
    const workId = req.params.id;
    await imageModel.validateWork(workId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const erase = async (req, res, next) => {
  try {
    const workId = req.params.id;
    await imageModel.deleteWork(workId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
  getByUserId,
  getAllNoValidate,
  getAllWUL,
  approve,
  erase,
};
