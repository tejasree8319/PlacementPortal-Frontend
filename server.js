const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var public = path.join(__dirname, 'public/');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// define a simple route
app.get('/', (req, res) => {
  //console.log('Enter');
  res.sendFile(path.join(public, 'login.html'));
});

//app.use('/static', express.static(path.join(__dirname, '/styles/css')));

// listen for requests
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
