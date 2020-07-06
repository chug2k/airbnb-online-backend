const faker = require("faker");
const Experience = require("./models/experience");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/airbnb-2");

const num = parseInt(process.argv[2]);

async function createExperiences(numExperiences) {
  console.log(`Generating ${numExperiences} Experiences...`);
  for (let i = 0; i < numExperiences; i++) {
    let experience = await Experience.create({
      title: faker.lorem.sentence(),
      pictureUrl: faker.image.image(),
      country: faker.address.country(),
      duration: faker.random.number(),
      price: faker.commerce.price(),
    });
    console.log(`Created ${i} - ${experience.title}`);
  }
}

createExperiences(num);
