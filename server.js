const express = require('express');

// tells not that we are creating an sxpress server
const app = express();

// set an initial port, from either env variable PORT or defaults to 3030
const PORT = process.env.PORT || 3030;

// set up the exress app to handel the data paarseing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// tell Express to serve static files in public and data directories
app.use(express.static("public"));

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start the server & listen to incoming requests
app.listen(PORT, function() {
    console.log('server is running and listening on http://localhost:' + PORT)
});