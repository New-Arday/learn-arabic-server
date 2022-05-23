const lessons = [
  { id: 1, lesson1: "Classroom" },
  { id: 2, lesson2: "fruit & veg" },
  { id: 3, lesson3: "colours" },
  { id: 4, lesson4: "family" },
];

const lesson = [
  { "Topic name": "Classroom" },
  {
    "Paragraph - gender":
      "text explaining the form the Arabic words take in Arabic grammar",
  },
  {
    words: [
      { "Arabic name": "Kitabun", "English meaning": "A book", image: "URL" },
      { "Arabic name": " Qalamun", "English meaning": "A pen", image: "URL" },
      {
        "Arabic name": "Masdaratun",
        "English meaning": "A ruller",
        image: "URL",
      },
      {
        "Arabic name": "Maktabatun",
        "English meaning": "a desk",
        image: "URL",
      },
    ],
  },
];

const words = [
  { "Arabic name": "Kitabun", "English meaning": "A book", image: "URL" },
  { "Arabic name": " Qalamun", "English meaning": "A pen", image: "URL" },
  { "Arabic name": "Masdaratun", "English meaning": "A ruller", image: "URL" },
  { "Arabic name": "Maktabatun", "English meaning": "a desk", image: "URL" },
];
module.exports = {
  lessons,
  words,
  lesson,
};
