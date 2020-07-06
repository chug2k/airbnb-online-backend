var express = require("express");
var router = express.Router();
const {
  getAllExperiences,
  createExperience,
} = require("../controllers/experiencesController");

router.get("/", getAllExperiences);

router.post("/", createExperience);

module.exports = router;
