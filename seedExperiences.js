const Experience = require("./models/experience");
const faker = require("faker");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/airbnb-3");

// Do you remember http://learning.coderschool.vn/courses/full_time_web2/unit/7#!tuesday?

const num = parseInt(process.argv[2]);

async function createExperiences(num) {
  console.log(`Creating ${num} experiences...`);
  for (let i = 0; i < num; i++) {
    let exp = await Experience.create({
      title: faker.lorem.sentence(),
      pictureUrl: faker.image.image(),
      country: faker.address.country(),
      price: faker.commerce.price(),
      duration: faker.random.number(),
    });
    console.log(`Created ${i}: ${exp.title}`);
  }
}

createExperiences(num);
