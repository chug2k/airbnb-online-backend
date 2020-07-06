const Experience = require("../models/experience");

const getAllExperiences = async (req, res) => {
  const experiences = await Experience.find();
  res.send(experiences);
};

const createExperience = async (req, res) => {
  const { title, pictureUrl, country, price, duration } = req.body;
  const newExperience = await Experience.create({
    title,
    pictureUrl,
    country,
    price,
    duration,
  });
  res.send(newExperience);
};

module.exports = {
  getAllExperiences,
  createExperience,
};
