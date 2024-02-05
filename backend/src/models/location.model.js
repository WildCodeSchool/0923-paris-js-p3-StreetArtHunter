const db = require("../../database/client");

const findAll = () => {
  return db.query("SELECT * FROM street_art_hunterz.location");
};

const getLocationById = (id) => {
  return db.query(
    `
    SELECT l.description, l.name, w.*
    FROM street_art_hunterz.location AS l
    LEFT JOIN street_art_hunterz.work AS w ON l.id = w.location_id
    WHERE l.id = ?
  `,
    [id]
  );
};

const getLocationByPostalCode = () => {
  return db.query(
    `
    SELECT w.*
    FROM street_art_hunterz.work AS w
    JOIN street_art_hunterz.location AS l ON w.location_id = l.id
  `,
    []
  );
};

module.exports = {
  findAll,
  getLocationById,
  getLocationByPostalCode,
};
