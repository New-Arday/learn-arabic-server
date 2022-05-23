// LESSON ROUTES
const express = require("express");

const { getAllLessons, getLessonById } = require("../controllers/Lesson");

const router = express.Router();
router.get("/", getAllLessons);
router.get("/:id", getLessonById);

module.exports = router;
