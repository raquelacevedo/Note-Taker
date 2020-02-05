  
const fs = require("fs");
const path = require("path");

const filename = "./db.json";

const dbfile = JSON.parse(fs.readFileSync(path.join(__dirname, filename),(err, data) => {
    if (err) throw err;
}));

module.exports = dbfile;