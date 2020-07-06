// title, pictureUrl, country, price, duration

const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  title: String,
  pictureUrl: String,
  country: String,
  price: Number,
  duration: Number,
});

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
