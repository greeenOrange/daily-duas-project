
const sqlite3 = require('sqlite3').verbose();

// Replace 'path/to/your/database.sqlite' with the actual path to your SQLite database file
const dbPath = 'databases/dua_main.sqlite';

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

module.exports = db;
