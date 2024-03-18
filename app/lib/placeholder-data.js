export const ropeRoutes = [
  {
    name: "The Wurliest Burliest Man",
    grade: "5.10",
    color: "Blue",
    type: "Lead",
    id: "00001",
    image: "/img/rope1.jpg",
    description: "A super fun climb with a lot of exposure",
    date: "02/02/2024",
    href: "/routes/route-page/the-wurliest-burliest-man",
    location: "main1",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
      {
        username: "ehonis",
        comment: "really hard route, jack is wrong^",
      },
    ],
  },
  {
    name: "The Long Dive",
    grade: "5.8",
    color: "Yellow",
    type: "Toprope",
    id: "00002",
    image: "/img/rope2.jpg",
    description: "A long climb with a lot of exposure",
    date: "02/03/2024",
    href: "/routes/route-page/the-long-dive",
    location: "main2",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
      {
        username: "ehonis",
        comment: "really hard route, jack is wrong^",
      },
    ],
  },
  {
    name: "The Crux Crusher",
    grade: "5.12",
    color: "Red",
    type: "Lead",
    id: "00003",
    image: "/img/rope2.jpg",
    description: "A challenging climb with a difficult crux",
    date: "02/04/2024",
    href: "/routes/route-page/the-crux-crusher",
    location: "main2",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
      {
        username: "ehonis",
        comment: "really hard route, jack is wrong^",
      },
    ],
  },
  {
    name: "The Slab Master",
    grade: "5.6",
    color: "Gray",
    type: "Toprope",
    id: "00004",
    image: "/img/rope2.jpg",
    description: "A technical climb on a slab wall",
    date: "02/05/2024",
    href: "/routes/route-page/the-slab-master",
    location: "AB",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
      {
        username: "ehonis",
        comment: "really hard route, jack is wrong^",
      },
    ],
  },
  {
    name: "Cheese has protein?",
    grade: "5.8",
    color: "Pink",
    type: "Boulder",
    id: "00005",
    image: "/img/boulder1.jpg",
    description: "A powerful dyno move required to complete the climb",
    date: "02/06/2024",
    href: "/routes/route-page/cheese-has-protein",
    location: "main1",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
      {
        username: "ehonis",
        comment: "really hard route, jack is wrong^",
      },
    ],
  },
];

export const boulderRoutes = [
  {
    name: "The Boulder Problem",
    grade: "V2",
    color: "Green",
    type: "Boulder",
    id: "00001",
    image: "/img/boulder1.jpg",
    discription: "A long climb with a lot of exposure",
    date: "2021-06-02",
    href: "/routes/route-page/the-boulder-problem",
    location: "boulder2",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
      {
        username: "ehonis",
        comment: "really hard route, jack is wrong^",
      },
    ],
  },
  {
    name: "The Dyno King",
    grade: "V5",
    color: "Orange",
    type: "Boulder",
    id: "00005",
    image: "/img/boulder1.jpg",
    description: "A powerful dyno move required to complete the climb",
    date: "02/06/2024",
    href: "/routes/route-page/the-dyno-king",
    location: "boulder1",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
      {
        username: "ehonis",
        comment: "really hard route, jack is wrong^",
      },
    ],
  },
  {
    name: "wow nice moves",
    grade: "V5",
    color: "Green",
    type: "Boulder",
    id: "00005",
    image: "/img/boulder1.jpg",
    description: "A powerful dyno move required to complete the climb",
    date: "02/06/2024",
    href: "/routes/route-page/the-dyno-king",
    location: "boulder1",
    comments: [
      {
        username: "jack",
        comment:
          "loved this route, pretty easy beginning, felt like 5.6, but ended up pretty hard in the last moves",
      },
      {
        username: "ehonis",
        comment: "really hard route, jack is wrong^",
      },
    ],
  },
];
export const events = [
  {
    name: "2024 Ropes League",
    date: "2024-06-02",
    image: "/img/trophy.png",
    id: "00001",
    active: true,
    href: "/events/2024-ropes-league",
  },
];
export const profiles = [
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
  },
];
export let currentUser = profiles[3];
