const db = require("../../database/client");

const insert = (work) => {
  const { latitude, longitude, entry, isValidate } = work;
  return db.query(
    "INSERT INTO work (latitude, longitude, image, User_id, entry, isValidate, location_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      latitude,
      longitude,
      work.URL_image,
      work.User_id,
      entry,
      isValidate,
      work.location_id,
    ]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM work WHERE User_id = ?", [id]);
};

const findAll = () => {
  return db.query("SELECT * FROM work");
};

module.exports = {
  insert,
  findById,
  findAll,
};
