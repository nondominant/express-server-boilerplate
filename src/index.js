const express = require("express");
const path = require("path");


const cors = require('cors');
const router = require('./routes.js');
const app = express();
const server = require('http').createServer(app);

app.use(cors());

app.use(express.json());

app.use('/', router);


//Configure routes.register(app);
//start the express server
server.listen(8888, function() {
  console.info(server.address());
});

