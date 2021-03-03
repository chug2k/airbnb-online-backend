var express = require("express");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

var indexRouter = require("./routes/index");
var experiencesRouter = require("./routes/experiences");

var app = express();
console.log("Mongo URI: " + process.env.MONGO_DB_URI);
mongoose.connect(process.env.MONGO_DB_URI);

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/", indexRouter);
app.use("/experiences", experiencesRouter);

module.exports = app;
