const uuidv1 = require('uuid/v1');
const readDb = require('../db/readDbFile');
const writeDb = require('../db/writeDbFile');

// Routes
// root route returns index.html
module.exports = function(app) {

  // routes to return db.json file constaining notes
  app.get("/api/notes", function(req, res) {
    const db = readDb;
    res.json(db);
  });

  // routes to return db.json file constaining notes
  app.post("/api/notes", function(req, res) {
    // generate unique id
    const uuid = uuidv1();
    // receive the new note from the webserver
    const newNote = req.body;
    //set uuid value
    newNote.id = uuid;

    // set variable to gather all data and seed it with data in the file
    let db = readDb;

    // append the newNote data to the variable with the file data
    db.push(newNote); 

    // overwrite file
    // calls function exported from file '../db/writeDbFile';
    writeDb(db);

    //return the data as JSON in the response
    res.json(db);
  });

  // route to delete note (specific by id)
  app.delete("/api/notes/:id", function(req, res) {
    // read in the file containing the notes db
    const db = readDb;
    // get value of id from params
    const deleteId = req.params.id;

    for (let i=0; i<db.length; i+=1 ) {
      if (db[i].id === deleteId) {
        // removes the i element from array
        db.splice(i,1);
        // no need to contiue looking for element to delete
        break;
      }
    }

    //return the data as JSON in the response
    res.json(db);
  });
}