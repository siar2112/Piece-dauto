
const express = require('express');
const bodyParser = require('body-parser'); // new line
const app = express();
const bcryptjs = require('bcryptjs');
const cors = require("cors");
const fs = require('fs');


const path = require('path');


// Serve any static files
app.use(express.static(path.join(__dirname, '../front_end/build')));





app.use(cors({
    origin: 'https://git.heroku.com/roshan1.git',  // replace with the domain of your client
    credentials: true
}));
app.use(express.json()); // for parsing application/json
app.use(bodyParser.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Database connection


const PORT = process.env.PORT || 3000; // Use the port from the environment variables, or 3000 if there's nothing there.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});