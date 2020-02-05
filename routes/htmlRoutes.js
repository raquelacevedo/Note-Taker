var path = require("path");
// Routes
module.exports = function(app) {
    // return notes.html file
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(`${__dirname}/../public`, "notes.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(`${__dirname}/../public`, "index.html"));
    });

}