const express = require("express");
var cors = require("cors");
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");

const app = express();
//configuring the necessary midllewares
app.use(cors()); // to allow the cross origin requests
app.use(bodyParser.json());

//configuring the routes
app.use("/api", apiRouter);

module.exports = app;
