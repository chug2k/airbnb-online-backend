var express = require("express");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

var indexRouter = require("./routes/index");
var experiencesRouter = require("./routes/experiences");

var app = express();
mongoose.connect("mongodb://localhost/airbnb-2");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/", indexRouter);
app.use("/experiences", experiencesRouter);

module.exports = app;
