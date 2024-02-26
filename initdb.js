const sql = require("better-sqlite3");
const db = sql("animelist.db");

const animelist = [
  {
    title: "Naruto",
    slug: "naruto",
    episode: 101,
    image: "/images/naruto.jpg",
    summary: "A kid,",
    information: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.
    `,
    creator: "Oda",
  },
  {
    title: "One Piece",
    slug: "onepiece",
    episode: 1001,
    image: "/images/onepiece.jpg",
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
    information: `
    Gol D. Roger was known as the "Pirate King," the 
    strongest and most infamous being to have sailed 
    the Grand Line. The capture and death of Roger by 
    the World Government brought a change throughout 
    the world. His last words before his death revealed 
    the existence of the greatest treasure in the world, 
    One Piece. It was this revelation that brought about 
    the Grand Age of Pirates, men who dreamed of finding 
    One Piece—which promises an unlimited amount of riches
     and fame—and quite possibly the pinnacle of glory and
      the title of the Pirate King. Enter Monkey D. Luffy, 
      a 17-year-old boy who defies your standard definition 
      of a pirate. Rather than the popular persona of a 
      wicked, hardened, toothless pirate ransacking villages 
      for fun, Luffy"’"s reason for being a pirate is one of 
      pure wonder: the thought of an exciting adventure that leads 
      him to intriguing people and ultimately, the promised treasure. 
      Following in the footsteps of his childhood hero,
       Luffy and his crew travel across the Grand Line,
        experiencing crazy adventures, unveiling dark mysteries 
        and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.
    `,
    creator: "Oda",
  },
  {
    title: "Baki",
    slug: "baki",
    episode: 33,
    image: "/images/baki.jpg",
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
    information: `
        1. Prepare the patty:
           Mix 200e the assembly with the top bun and serve hot.
      `,
    creator: "Oda",
  },
  {
    title: "One Punch Man",
    slug: "onepunchman",
    episode: 55,
    image: "/images/onepunchman.jpg",
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
    information: `
        1. Prepare the patty:
           Mix 200g of ground beef with salt and pepper. Form into a patty. the top bun and serve hot.
      `,
    creator: "Oda",
  },
  {
    title: "DragonBall",
    slug: "dragonball",
    episode: 134,
    image: "/images/dragonball.jpg",
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
    information: `
        1. Prepare the patty:
           Mix 200g of ground beef with salt and pepper. Form into a patty.
                      Complete the assembly with the top bun and serve hot.
      `,
    creator: "Oda",
  },
  {
    title: "Hajimine Ippo",
    slug: "ippo",
    episode: 199,
    image: "/images/ippo.jpg",
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
    information: `
        1. Prepare the patty:
           Mix 200g of ground 
        4. Serve:
           Complete the assembly with the top bun and serve hot.
      `,
    creator: "Oda",
  },
  {
    title: "Hunter x Hunter",
    slug: "hunterxhunter",
    episode: 101,
    image: "/images/hxh.jpg",
    summary: "A kid,",
    information: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.
    `,
    creator: "Oda",
  },
  {
    title: "Death Note",
    slug: "deathnote",
    episode: 101,
    image: "/images/deathnote.jpg",
    summary: "A kid,",
    information: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.
    `,
    creator: "Oda",
  },
  {
    title: "Attack on Titan",
    slug: "aoa",
    episode: 101,
    image: "/images/aoa.jpg",
    summary: "A kid,",
    information: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.
    `,
    creator: "Oda",
  },
  {
    title: "Kingdom",
    slug: "kingdom",
    episode: 101,
    image: "/images/kingdom.jpg",
    summary: "A kid,",
    information: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.
    `,
    creator: "Oda",
  },
  {
    title: "Jujutsu Kaisen",
    slug: "jujutsukaisen",
    episode: 101,
    image: "/images/jjk.jpg",
    summary: "A kid,",
    information: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.
    `,
    creator: "Oda",
  },
  {
    title: "Blue Lock",
    slug: "bluelock",
    episode: 101,
    image: "/images/bluelock.jpg",
    summary: "A kid,",
    information: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.
    `,
    creator: "Oda",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS animelist (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       title TEXT NOT NULL,
       slug TEXT NOT NULL UNIQUE,
       episode INTEGER NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       information TEXT NOT NULL,
       creator TEXT NOT NULL
       )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO animelist VALUES (
         null,
         @title,
         @slug,
         @episode,
         @image,
         @summary,
         @information,
         @creator
      )
   `);

  for (const anime of animelist) {
    stmt.run(anime);
  }
}

initData();
