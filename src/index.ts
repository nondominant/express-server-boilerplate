import dotenv from "dotenv";
import express from "express";
import path from "path";


const cors = require('cors');
const router = require('./routes');
dotenv.config();
const port = process.env.SERVER_PORT;
const app = express();
const server = require('http').createServer(app);

app.use(cors());

app.use('/', router);

app.use(express.json());

//Configure routes.register(app);
//start the express server
server.listen(8888, function() {
  console.info(server.address());
});

