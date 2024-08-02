const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./Database/playlists.db');

// Initialize the database
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS playlists (
      id TEXT PRIMARY KEY,
      name TEXT,
      songs TEXT,
      owner TEXT,
      isPublic BOOLEAN
    )
  `);
});

module.exports = db;
