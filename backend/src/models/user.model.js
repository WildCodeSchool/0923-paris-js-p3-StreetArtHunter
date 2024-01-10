const db = require("../../database/client");

const insert = (user) => {
  // eslint-disable-next-line camelcase
  const { pseudo, email, password, registration_date, score, admin } = user;

  return db.query(
    "INSERT INTO user (pseudo, email, password, registration_date, score, admin) VALUES (?, ?, ?, ?, ?, ?)",
    // eslint-disable-next-line camelcase
    [pseudo, email, password, registration_date, score, admin]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM user WHERE id = ?", [id]);
};

const findByEmail = (pseudo, email) => {
  return db.query("SELECT * FROM user WHERE pseudo= ? OR email = ?", [
    pseudo,
    email,
  ]);
};

module.exports = {
  insert,
  findById,
  findByEmail,
};
