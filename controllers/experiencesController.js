const Experience = require("../models/experience");

const getAllExperiences = async (req, res) => {
  const page = req.query.page || 1;
  const skipNum = (page - 1) * 25;

  const experiences = await Experience.find().limit(25).skip(skipNum);
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
