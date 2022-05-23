const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const FEMININE = "Feminine";
const MASCULINE = "Masculine";
async function seed() {
  const fruitsAndVeg = await prisma.Lesson.create({
    data: {
      lesson: "Fruits and Vegetables",
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      paragraph: "Let's learn about fruits and Veg in Arabic!",

      words: {
        create: [
          {
            genderType: FEMININE,
            arabicWord: "تفاحة",
            englishWord: "An apple",

            image:
              "https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          },
          {
            genderType: FEMININE,
            arabicWord: "زَيْتُونَةٌ",
            englishWord: "An Olive",

            image:
              "https://media.istockphoto.com/photos/olives-bottle-virgin-olive-oil-and-oil-in-a-bowl-with-some-green-and-picture-id1223135192?k=20&m=1223135192&s=612x612&w=0&h=XcMTBRrfLIbFQLz4esLXpoVLnKzekdSNHcvVKi5hhg8=",
          },
          {
            genderType: FEMININE,
            arabicWord: "إِجَّاصَةٌ",
            englishWord: "A pear",

            image:
              "https://images.unsplash.com/photo-1631160299919-6a175aa6d189?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
          },
          {
            genderType: MASCULINE,
            arabicWord: "عِنَبٌ",
            englishWord: "Grapes",

            image:
              "https://media.istockphoto.com/photos/green-seedless-grape-isolated-grapes-on-white-with-clipping-path-full-picture-id1307118036?b=1&k=20&m=1307118036&s=170667a&w=0&h=V0h0leRz93wtL_YHM0jp6cO05lBvEfHPOa0Hjg8lFRY=",
          },
          {
            genderType: MASCULINE,
            arabicWord: "بَطِّيْخٌ",
            englishWord: "A watermelon",

            image:
              "https://images.unsplash.com/photo-1563114773-84221bd62daa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXJtZWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
          },
          {
            genderType: MASCULINE,
            arabicWord: "جَزَرٌ",
            englishWord: "A carrot",

            image:
              "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500",
          },
          {
            genderType: FEMININE,
            arabicWord: "مَوْزَةٌ",
            englishWord: "A banana",

            image:
              "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFuYW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            genderType: MASCULINE,
            arabicWord: "أَنَانَاسٌ",
            englishWord: "A pineapple",

            image:
              "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGluZWFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            genderType: FEMININE,
            arabicWord: "فَرَاوِلَةٌ",
            englishWord: "A strawberry",

            image:
              "https://images.unsplash.com/photo-1596891975871-65ba1701e712?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcndiZXJyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
          },
          {
            genderType: MASCULINE,
            arabicWord: "بَصَلٌ",
            englishWord: "An onion",

            image:
              "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b25pb258ZW58MHx8MHx8&auto=format&fit=crop&w=500",
          },
        ],
      },
    },
    include: { words: true },
  });

  console.log("Lesson  fruitsAndVeg  created", fruitsAndVeg);
  const animals = await prisma.Lesson.create({
    data: {
      lesson: "Animals",
      paragraph: "Let's learn about Animals objects in Arabic!",
      image:
        "https://images.unsplash.com/photo-1629812456605-4a044aa38fbc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
      words: {
        create: [
          {
            genderType: FEMININE,
            arabicWord: "فَرَاشَةٌ",
            englishWord: "A butterfly",

            image:
              "https://images.unsplash.com/photo-1535068484622-7a077e5aa558?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YSUyMGJ1dHRlcmZseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
          },
          {
            genderType: FEMININE,
            arabicWord: "بُومَةٌ",
            englishWord: "An owl",

            image:
              "https://images.unsplash.com/photo-1532562066470-f6f5f6d47924?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW4lMjBvd2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
          },
          {
            genderType: FEMININE,
            arabicWord: "قِطَّةٌ",
            englishWord: "A cat",

            image:
              "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
          },
          {
            genderType: FEMININE,
            arabicWord: "دَجَاجَةٌ",
            englishWord: "A chicken",

            image:
              "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            genderType: FEMININE,
            arabicWord: "صِفْدِعَةٌ",
            englishWord: "A frog",

            image:
              "https://images.unsplash.com/photo-1579380656108-f98e4df8ea62?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
          },
          {
            genderType: MASCULINE,
            arabicWord: "حِصَانٌ",
            englishWord: "A horse",

            image:
              "https://images.unsplash.com/photo-1599053581540-248ea75b59cb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvcnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500",
          },
          {
            genderType: MASCULINE,
            arabicWord: "أَسَدٌ",
            englishWord: "A lion",

            image:
              "https://images.unsplash.com/photo-1618641662184-bafefb91a542?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
          },
          {
            genderType: MASCULINE,
            arabicWord: "تِمْسَاحٌ",
            englishWord: "A crocodile",

            image:
              "https://images.unsplash.com/photo-1570308514141-48b0e0852591?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3JvY29kaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500",
          },
          {
            genderType: MASCULINE,
            arabicWord: "فِيْلٌ",
            englishWord: "An elephant ",

            image:
              "https://images.unsplash.com/photo-1603483080228-04f2313d9f10?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlcGhhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
          },
          {
            genderType: MASCULINE,
            arabicWord: "ثُعْبَانٌ",
            englishWord: "A snake",

            image:
              "https://images.unsplash.com/photo-1555455955-c2e1feb6f81c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c25ha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
          },
        ],
      },
    },
    include: { words: true },
  });

  console.log("Lesson classroom   created", animals);
  const colours = await prisma.Lesson.create({
    data: {
      lesson: "Colours",
      image:
        "https://images.unsplash.com/photo-1587586062323-836089e60d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29sb3Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      paragraph: "Let's learn about colours in Arabic!",
      words: {
        create: [
          {
            genderType: MASCULINE,
            arabicWord: "Azraq",
            englishWord: "Blue",

            image:
              "https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            genderType: MASCULINE,
            arabicWord: "Akhdar",
            englishWord: "Green",

            image:
              "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            genderType: MASCULINE,
            arabicWord: "",
            englishWord: "",

            image:
              "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            genderType: MASCULINE,
            arabicWord: "",
            englishWord: "",

            image:
              "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            genderType: MASCULINE,
            arabicWord: "",
            englishWord: "",

            image:
              "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            genderType: FEMININE,
            arabicWord: "Asfar",
            englishWord: "Yellow",

            image:
              "https://images.unsplash.com/photo-1508808787069-421e7986016e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            genderType: FEMININE,
            arabicWord: "",
            englishWord: "",

            image: "",
          },
          {
            genderType: FEMININE,
            arabicWord: "",
            englishWord: "",

            image: "",
          },
          {
            genderType: FEMININE,
            arabicWord: "",
            englishWord: "",

            image: "",
          },
          {
            genderType: FEMININE,
            arabicWord: "",
            englishWord: "",
            image: "",
          },
        ],
      },
    },
    include: { words: true },
  });

  console.log("Lesson colours   created", colours);
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
