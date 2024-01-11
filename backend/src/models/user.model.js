const db = require("../../database/client");

const insert = (user) => {
  const { pseudo, email, password, registrationDate, score, admin } = user;

  return db.query(
    "INSERT INTO user (pseudo, email, password, registrationDate, score, admin) VALUES (?, ?, ?, ?, ?, ?)",
    [pseudo, email, password, registrationDate, score, admin]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM user WHERE id = ?", [id]);
};

const findByEmail = (email) => {
  return db.query("SELECT * FROM user WHERE email = ?", [email]);
};

module.exports = {
  insert,
  findById,
  findByEmail,
};
