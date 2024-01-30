const db = require("../../database/client");

const findAll = () => {
  return db.query("SELECT * FROM street_art_hunterz.location");
};

const getLocationById = (id) => {
  return db.query(
    `
    SELECT l.*, w.image AS work_image
    FROM street_art_hunterz.location AS l
    LEFT JOIN street_art_hunterz.work AS w ON l.id = w.location_id
    WHERE l.id = ?
  `,
    [id]
  );
};

module.exports = {
  findAll,
  getLocationById,
};
