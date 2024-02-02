const db = require("../../database/client");

const insert = (artist) => {
  return db.query("INSERT INTO artist(pseudo) VALUES (?)", [artist]);
};

const getByName = (pseudo) => {
  return db.query(
    "SELECT * FROM artist WHERE pseudo LIKE concat('%', ?, '%') LIMIT 1;",
    [pseudo]
  );
};

const insertInArtistWork = (artist, work) => {
  return db.query("INSERT INTO artist_work(Artist_id, Work_id) VALUES (?, ?)", [
    artist,
    work,
  ]);
};

module.exports = {
  insert,
  getByName,
  insertInArtistWork,
};
