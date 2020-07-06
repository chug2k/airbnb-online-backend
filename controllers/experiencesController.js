const Experience = require("../models/experience");

const PAGE_SIZE = 25;

const getAllExperiences = async (req, res) => {
  const pageNum = req.query.page || 1;
  const minPrice = parseInt(req.query.minPrice) || 1;
  const maxPrice = parseInt(req.query.maxPrice) || 1000;
  const numToSkip = (parseInt(pageNum) - 1) * PAGE_SIZE;
  const experiences = await Experience.find({
    price: { $gte: minPrice, $lte: maxPrice },
  })
    .skip(numToSkip)
    .limit(PAGE_SIZE)
    .sort({ price: 1 });

  const numDocuments = await Experience.countDocuments({
    price: { $gte: minPrice, $lte: maxPrice },
  });
  res.send({
    data: experiences,
    maxPageNum: Math.ceil(numDocuments / PAGE_SIZE),
  });
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
