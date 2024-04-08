const { PrismaClient } = require("@prisma/client");

const ropeRoutes = [
  {
    name: "Beginner Big Mike",
    grade: "5.B",
    color: "Black",
    type: "TopeRope",
    id: 1,
    image: "/img/beginner-big-mike.JPEG",
    description:
      "A great route for beginners to practice their climbing skills",
    date: "2024-01-01T00:00:00Z",
    href: `/routes/route-page/beginner-big-mike`,
    location: "main2",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
    ],
    ascents: 10,
  },
  {
    name: "Sike!",
    grade: "5.9",
    color: "Yellow",
    type: "TopeRope",
    id: 2,
    image: "/img/sike!.JPEG",
    description: "watch out!",
    date: "2024-01-01T00:00:00Z",
    href: `/routes/route-page/sike!`,
    location: "main2",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
    ],
    ascents: 6,
  },
  {
    name: "Uh...Oh...Ah",
    grade: "5.10",
    color: "Orange",
    type: "TopeRope",
    id: 3,
    image: "/img/uh-oh-ah.JPEG",
    description: "oops, you slipped",
    date: "2024-01-01T00:00:00Z",
    href: `/routes/route-page/uh-oh-ah`,
    location: "main2",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
    ],
    ascents: 3,
  },
  {
    name: "When Pigs Fly",
    grade: "5.12-",
    color: "Blue",
    type: "Toperope/Lead",
    id: 4,
    image: "/img/when-pigs-fly.JPEG",
    description: "this is getting hard",
    date: "2024-01-01T00:00:00Z",
    href: `/routes/route-page/when-pigs-fly`,
    location: "main2",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
    ],
    ascents: 5,
  },
  {
    name: "Tin Man",
    grade: "5.10+",
    color: "Red",
    type: "TopeRope/Lead",
    id: 5,
    image: "/img/tin-man.JPEG",
    description: "pockety-pockets",
    date: "2024-01-01T00:00:00Z",
    href: `/routes/route-page/tin-man`,
    location: "main2",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
    ],
    ascents: 7,
  },
  {
    name: "Broken Hearts",
    grade: "5.12",
    color: "Black",
    type: "TopeRope/Lead",
    id: 6,
    image: "/img/broken-hearts.JPEG",
    description: "ur insane",
    date: "2024-01-01T00:00:00Z",
    href: `/routes/route-page/broken-hearts`,
    location: "main2",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
    ],
    ascents: 23,
  },
  {
    name: "Door Open, Door Closed",
    grade: "5.9",
    color: "Yellow",
    type: "Lead",
    id: 7,
    image: "/img/door-open-door-closed.JPEG",
    description: "arete fun",
    date: "2024-01-01T00:00:00Z",
    href: `/routes/route-page/door-open-door-closed`,
    location: "main2",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
    ],
    ascents: 99,
  },
];

const boulderRoutes = [
  {
    name: "The Wurliest Burliest Man",
    grade: "V1",
    color: "Blue",
    type: "Boulder",
    id: 1,
    image: "/img/rope1.jpg",
    description: "A super fun climb with a lot of exposure",
    date: "2024-01-01T00:00:00Z",
    href: "/routes/route-page/the-wurliest-burliest-man",
    location: "boulder1",
    ascents: 10,
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
    ],
  },
  {
    name: "The Long Dive",
    grade: "V2",
    color: "Yellow",
    type: "Boulder",
    id: 2,
    image: "/img/rope2.jpg",
    description: "A long climb with a lot of exposure",
    date: "2024-01-01T00:00:00Z",
    href: "/routes/route-page/the-long-dive",
    location: "boulder2",
    ascents: 10,
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
    ],
  },
  {
    name: "The Crux Crusher",
    grade: "V3",
    color: "Red",
    type: "Boulder",
    id: 3,
    image: "/img/rope2.jpg",
    description: "A challenging climb with a difficult crux",
    date: "2024-01-01T00:00:00Z",
    href: "/routes/route-page/the-crux-crusher",
    location: "boulder1",
    ascents: 10,
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
    ],
  },
  {
    name: "The Slab Master",
    grade: "V3",
    color: "Gray",
    type: "Boulder",
    id: 4,
    image: "/img/rope2.jpg",
    description: "A technical climb on a slab wall",
    date: "2024-01-01T00:00:00Z",
    href: "/routes/route-page/the-slab-master",
    location: "boulder2",
    ascents: 10,
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
    ],
  },
  {
    name: "Cheese has protein?",
    grade: "V6",
    color: "Pink",
    type: "Boulder",
    id: 5,
    image: "/img/boulder1.jpg",
    description: "A powerful dyno move required to complete the climb",
    date: "2024-01-01T00:00:00Z",
    href: "/routes/route-page/cheese-has-protein",
    location: "boulder1",
    ascents: 10,
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
    ],
  },
];

const events = [
  {
    name: "2024 Ropes League",
    date: "2024-06-02",
    image: "/img/trophy.png",
    id: "00001",
    active: true,
    href: "/events/2024-ropes-league",
  },
];
const user = [
  {
    username: "ehonis",
    name: "Ethan",
    email: "e-24@live.com",
    admin: false,
    role: "Rope Climber",
    image: "/img/default-profile-pic.jpg",
    password: "password1234",
    href: "/profile/ehonis",
  },
  {
    username: "Neilly",
    name: "Neil",
    email: "Neil@live.com",
    admin: false,
    role: "Hybrid Athlete",
    image: "/img/default-profile-pic.jpg",
    password: "password1234",
    href: "/profile/Neilly",
  },
  {
    username: "OTR_DJ",
    name: "DJ",
    email: "dj@gmail.com",
    admin: true,
    role: "Manager",
    image: "/img/default-profile-pic.jpg",
    password: "password1234",
    href: "/profile/OTR_DJ",
  },
  {
    username: "jack",
    name: "Jack",
    email: "jack@gmail.com",
    admin: true,
    role: "Routesetter",
    image: "/img/jack_profilePic.png",
    password: "password1234",
    href: "/profile/jack",
    rope_routes: [
      {
        id: 1,
        date: "2024-01-01",
        flash: true,
      },
      {
        id: 2,
        date: "2024-01-01",
        flash: true,
      },
      {
        id: 3,
        date: "2024-01-01",
        flash: true,
      },
      {
        id: 4,
        date: "2024-01-01",
        flash: false,
      },
      {
        id: 5,
        date: "2024-01-01",
        flash: true,
      },
      {
        id: 6,
        date: "2024-01-04",
        flash: false,
      },
    ],
    boulder_routes: [
      {
        id: 1,
        date: "2024-01-01",
        flash: true,
      },
      {
        id: 2,
        date: "2024-01-01",
        flash: true,
      },
      {
        id: 3,
        date: "2024-01-01",
        flash: true,
      },
      {
        id: 4,
        date: "2024-01-01",
        flash: false,
      },
      {
        id: 5,
        date: "2024-01-01",
        flash: true,
      },
    ],
  },
];

const prisma = new PrismaClient();

async function seedUser() {
  console.log("seeding users");
  for (const person of user) {
    await prisma.user.create({
      data: {
        username: person.username,
        name: person.name,
        email: person.email,
        admin: false,
        role: person.role,
        image: person.image,
        password: person.password,
        href: person.href,
      },
    });
  }
}
async function seedRoutes() {
  console.log("seeding routes");
  for (const route of ropeRoutes) {
    await prisma.RopeRoute.create({
      data: {
        name: route.name,
        grade: route.grade,
        communityGrade: null,
        color: route.color,
        type: route.type,
        image: route.image,
        description: route.description,
        date: route.date,
        href: route.href,
        location: route.location,
        ascents: route.ascents,
      },
    });
  }
}
async function seedBoulders() {
  console.log("seeding boulders");

  for (const route of boulderRoutes) {
    await prisma.BoulderRoute.create({
      data: {
        name: route.name,
        grade: route.grade,
        communityGrade: null,
        color: route.color,
        type: route.type,
        image: route.image,
        description: route.description,
        name: route.name,
        grade: route.grade,
        communityGrade: null,
        color: route.color,
        type: route.type,
        image: route.image,
        description: route.description,
        date: route.date,
        href: route.href,
        location: route.location,
        ascents: route.ascents,
      },
    });
  }
}
seedRoutes()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
seedBoulders()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
seedUser()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
