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

// Non premuni contre injections SQL //
const findAll = () => {
  return db.query(
    `SELECT w.*, u.pseudo AS user_pseudo, a.pseudo AS artist_pseudo, l.name AS location_name
    FROM work AS w
    JOIN user AS u ON w.User_id = u.id
    JOIN location AS l ON w.location_id = l.id
    LEFT JOIN artist_work AS aw ON w.id = aw.Work_id
    LEFT JOIN artist AS a ON aw.Artist_id = a.id`,
    []
  );
};
const getImageByLocationId = (id) => {
  return db.query(
    "Select image FROM `street_art_hunterz`.`work` WHERE location_id = ?",
    [id]
  );
};
module.exports = {
  insert,
  findById,
  findAll,
  getImageByLocationId,
};
