import dayjs from "dayjs";

export const ropeRoutes = [
  {
    name: "Beginner Big Mike",
    grade: "5.B",
    color: "Black",
    type: "TopeRope",
    id: 1,
    image: "/img/beginner-big-mike.jpeg",
    description:
      "A great route for beginners to practice their climbing skills",
    date: "2024-01-01",
    href: `/routes/route-page/beginner-big-mike`,
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
    name: "Sike!",
    grade: "5.9",
    color: "Yellow",
    type: "TopeRope",
    id: 2,
    image: "/img/sike!.jpeg",
    description: "watch out!",
    date: "2024-01-01",
    href: `/routes/route-page/sike!`,
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
    name: "Uh...Oh...Ah",
    grade: "5.10",
    color: "Orange",
    type: "TopeRope",
    id: 3,
    image: "/img/uh-oh-ah.jpeg",
    description: "oops, you slipped",
    date: "2024-01-01",
    href: `/routes/route-page/uh-oh-ah`,
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
    name: "When Pigs Fly",
    grade: "5.12-",
    color: "Blue",
    type: "Toperope/Lead",
    id: 4,
    image: "/img/when-pigs-fly.jpeg",
    description: "this is getting hard",
    date: "2024-01-01",
    href: `/routes/route-page/when-pigs-fly`,
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
    name: "Tin Man",
    grade: "5.10+",
    color: "Red",
    type: "TopeRope/Lead",
    id: 5,
    image: "/img/tin-man.jpeg",
    description: "pockety-pockets",
    date: "2024-01-01",
    href: `/routes/route-page/tin-man`,
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
    name: "Broken Hearts",
    grade: "5.12",
    color: "Black",
    type: "TopeRope/Lead",
    id: 6,
    image: "/img/broken-hearts.jpeg",
    description: "ur insane",
    date: "2024-01-01",
    href: `/routes/route-page/broken-hearts`,
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
    name: "Door Open, Door Closed",
    grade: "5.9",
    color: "Yellow",
    type: "Lead",
    id: 7,
    image: "/img/door-open-door-closed.jpeg",
    description: "arete fun",
    date: "2024-01-01",
    href: `/routes/route-page/door-open-door-closed.jpeg`,
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
    name: "Two Hats",
    grade: "5.10-",
    color: "Blue",
    type: "TopeRope/Lead",
    id: 8,
    image: "/img/two-hats.jpeg",
    description: "alittle pumpy",
    date: "2024-01-01",
    href: `/routes/route-page/two-hats`,
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
    name: "Fly Away",
    grade: "5.11-",
    color: "Pink",
    type: "TopeRope/Lead",
    id: 9,
    image: "/img/fly-away.jpeg",
    description: "dyhedral excitment",
    date: "2024-01-01",
    href: `/routes/route-page/fly-away`,
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
    name: "The Clearing",
    grade: "5.8+",
    color: "Orange",
    type: "TopeRope/Lead",
    id: 10,
    image: "/img/the-clearing.jpeg",
    description: "How do I undercling?",
    date: "2024-01-01",
    href: `/routes/route-page/the-clearing`,
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
    name: "Q-and-A",
    grade: "5.9+",
    color: "Yellow",
    type: "TopeRope/Lead",
    id: 11,
    image: "/img/q-and-a.jpeg",
    description: "its better one hold up",
    date: "2024-01-01",
    href: `/routes/route-page/q-and-a`,
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
    name: "New Car Smell",
    grade: "5.7",
    color: "Green",
    type: "TopeRope/Lead",
    id: 12,
    image: "/img/new-car-smell.jpeg",
    description: "juggin",
    date: "2024-01-01",
    href: `/routes/route-page/new-car-smell`,
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
    name: "Mint",
    grade: "5.11",
    color: "Blue",
    type: "TopeRope",
    id: 13,
    image: "/img/mint.jpeg",
    description: "I love hard starting moves",
    date: "2024-01-01",
    href: `/routes/route-page/mint`,
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
    name: "Cheese Sticks Have Protein?",
    grade: "5.10",
    color: "Black",
    type: "TopeRope",
    id: 14,
    image: "/img/cheese-sticks-have-protein.jpeg",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/cheese-sticks-have-protein`,
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
    name: "Stay Golden, Pony Boy",
    grade: "5.9",
    color: "Yellow",
    type: "Auto Belay",
    id: 15,
    image: "/img/stay-golden-pony-boy.jpeg",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/stay-golden-pony-boy`,
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
    name: "Did You Touch My Drumset",
    grade: "5.7",
    color: "Purple",
    type: "Auto Belay",
    id: 16,
    image: "/img/did-you-touch-my-drumset.jpeg",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/did-you-touch-my-drumset`,
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
    name: "I Was Watching Cops",
    grade: "5.8+",
    color: "Blue",
    type: "Auto Belay",
    id: 17,
    image: "/img/i-was-watching-cops.jpeg",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/i-was-watching-cops`,
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
    name: "Why Are You So Sweaty",
    grade: "5.10+",
    color: "Red",
    type: "Auto Belay",
    id: 18,
    image: "/img/why-are-you-so-sweaty.JPEG",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/why-are-you-so-sweaty`,
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
    name: "Catalina Wine Mixer",
    grade: "5.9+",
    color: "Pink",
    type: "Auto Belay",
    id: 19,
    image: "/img/catalina-wine-mixer.JPEG",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/catalina-wine-mixer`,
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
    name: "Wednesdays at the Lode",
    grade: "5.11+",
    color: "Black",
    type: "Auto Belay",
    id: 20,
    image: "/img/wednesdays-at-the-lode.JPEG",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/wednesdays-at-the-lode`,
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
    name: "Gone Too Far",
    grade: "5.10-",
    color: "Orange",
    type: "Auto Belay",
    id: 21,
    image: "/img/gone-too-far.JPEG",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/gone-too-far`,
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
    name: "Cat's Game",
    grade: "5.10-",
    color: "Purple",
    type: "Auto Belay",
    id: 22,
    image: "/img/cats-game.jpeg",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/cats-game`,
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
    name: "Beginner",
    grade: "5.B",
    color: "Yellow",
    type: "Auto Belay",
    id: 23,
    image: "/img/beginner1.jpeg",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/beginner1`,
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
    name: "Trivlo Cheater",
    grade: "5.10-",
    color: "Yellow",
    type: "Auto Belay",
    id: 24,
    image: "/img/trivlo-cheater.jpeg",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/trivlo-cheater`,
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
    name: "No Longer A Pipedream",
    grade: "5.9",
    color: "Yellow",
    type: "Top Rope/Lead",
    id: 25,
    image: "/img/no-longer-a-pipedream.JPEG",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/no-longer-a-pipedream`,
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
    name: "Blindspot",
    grade: "5.7+",
    color: "Blue",
    type: "Top Rope/Lead",
    id: 26,
    image: "/img/blindspot.JPEG",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/blindspot`,
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
    name: "The Smile",
    grade: "5.11",
    color: "Orange",
    type: "Top Rope/Lead",
    id: 27,
    image: "/img/the-smile.JPEG",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/the-smile`,
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
    name: "Politically Innocrracked",
    grade: "5.10",
    color: "Orange",
    type: "Lead",
    id: 28,
    image: "/img/politically-incorracked.JPEG",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/politically-incorracked`,
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
    name: "Cracking Up",
    grade: "5.8+",
    color: "Red",
    type: "Lead",
    id: 29,
    image: "/img/cracking-up.JPEG",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/cracking-up`,
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
    name: "Evan's Project",
    grade: "5.13-",
    color: "Pink",
    type: "Lead",
    id: 30,
    image: "/img/evans-project.JPEG",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/evans-project`,
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
    name: "The Cracken",
    grade: "5.10+",
    color: "Blue",
    type: "Lead",
    id: 31,
    image: "/img/the-crack-en.jpeg",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/the-crack-en`,
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
    name: "Snap, Crackle, Pop",
    grade: "5.11+",
    color: "Purple",
    type: "Lead",
    id: 32,
    image: "/img/snap-crackle-pop.jpeg",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/snap-crackle-pop`,
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
    name: "Cracker Barrel",
    grade: "5.7+",
    color: "Green",
    type: "Lead",
    id: 33,
    image: "/img/cracker-barrel.jpeg",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/cracker-barrel`,
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
    name: "Clean Skin",
    grade: "5.10",
    color: "Green",
    type: "Top Rope / Lead",
    id: 34,
    image: "/img/clean-skin.JPEG",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/clean-skin`,
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
    name: "Caught in the Crossfire",
    grade: "5.9",
    color: "Black",
    type: "Top Rope / Lead",
    id: 35,
    image: "/img/caught-in-the-crossfire.JPEG",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/caught-in-the-crossfire`,
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
    name: "Achilles Heel",
    grade: "5.7",
    color: "Yellow",
    type: "Top Rope",
    id: 36,
    image: "/img/achilles-heel.jpeg",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/achilles-heel`,
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
    name: "Fastest Gun in the West",
    grade: "5.8",
    color: "Pink",
    type: "Auto Belay",
    id: 37,
    image: "/img/fastest-gun-in-the-west.JPEG",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/fastest-gun-in-the-west`,
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
    name: "Queen of Dreams",
    grade: "5.7",
    color: "Black",
    type: "Auto Belay",
    id: 38,
    image: "/img/queen-of-dreams.jpeg",
    description: "that was a cool transition",
    date: "2024-01-01",
    href: `/routes/route-page/queen-of-dreams`,
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
];

export const boulderRoutes = [
  {
    name: "The Wurliest Burliest Man",
    grade: "V1",
    color: "Blue",
    type: "Boulder",
    id: "00001",
    image: "/img/rope1.jpg",
    description: "A super fun climb with a lot of exposure",
    date: "02/02/2024",
    href: "/routes/route-page/the-wurliest-burliest-man",
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
    name: "The Long Dive",
    grade: "V2",
    color: "Yellow",
    type: "Boulder",
    id: "00002",
    image: "/img/rope2.jpg",
    description: "A long climb with a lot of exposure",
    date: "02/03/2024",
    href: "/routes/route-page/the-long-dive",
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
    name: "The Crux Crusher",
    grade: "V3",
    color: "Red",
    type: "Boulder",
    id: "00003",
    image: "/img/rope2.jpg",
    description: "A challenging climb with a difficult crux",
    date: "02/04/2024",
    href: "/routes/route-page/the-crux-crusher",
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
    name: "The Slab Master",
    grade: "V3",
    color: "Gray",
    type: "Boulder",
    id: "00004",
    image: "/img/rope2.jpg",
    description: "A technical climb on a slab wall",
    date: "02/05/2024",
    href: "/routes/route-page/the-slab-master",
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
    name: "Cheese has protein?",
    grade: "V6",
    color: "Pink",
    type: "Boulder",
    id: "00005",
    image: "/img/boulder1.jpg",
    description: "A powerful dyno move required to complete the climb",
    date: "02/06/2024",
    href: "/routes/route-page/cheese-has-protein",
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
    rope_routes: [
      {
        id: "00001",
        date: "2024-01-01",
        flash: true,
      },
      {
        id: "00002",
        date: "2024-01-01",
        flash: true,
      },
      {
        id: "00003",
        date: "2024-01-01",
        flash: true,
      },
      {
        id: "00004",
        date: "2024-01-01",
        flash: false,
      },
      {
        id: "00005",
        date: "2024-01-01",
        flash: true,
      },
    ],
  },
];
export let currentUser = profiles[3];
