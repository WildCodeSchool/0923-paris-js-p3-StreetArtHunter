const db = require("../../database/client");

const findAll = () => {
  return db.query("SELECT * FROM street_art_hunterz.location");
};

const getLocationById = (id) => {
  return db.query("Select * FROM street_art_hunterz.location WHERE id = ?", [
    id,
  ]);
};

module.exports = {
  findAll,
  getLocationById,
};
