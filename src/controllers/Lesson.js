// LESSON CONTROLLER
const prisma = require("../utils/dbClient");
const getAllLessons = async (req, res) => {
  const lessons = await prisma.Lesson.findMany({
    include: { words: true },
  });

  res.json({ lessons: lessons });
};
const getLessonById = async (req, res) => {
  console.log("GetLessonByID, got lesson Id:", req.params.id);
  const lesson = await prisma.Lesson.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
    include: { words: true },
  });

  res.json({ lesson: lesson });
};

module.exports = {
  getAllLessons,
  getLessonById,
};
