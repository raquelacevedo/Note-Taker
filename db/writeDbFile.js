
const fs = require("fs");
const path = require("path");
const filename = "./db.json";

const dbfile = (db) => { 
  fs.writeFileSync(path.join(__dirname, filename),JSON.stringify(db),(err, data) => { if (err) throw err; } ); 
}

module.exports = dbfile;