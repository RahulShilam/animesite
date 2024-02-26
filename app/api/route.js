import sql from "better-sqlite3";

const db = sql("animelist.db");

export async function getAnimeList() {
  //run-to insert all=>to retrive get=>get single row
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM animelist").all();
}

export async function getAnimeInfo(slug) {
  return db.prepare(`SELECT * FROM animelist WHERE slug=?`).get(slug);
}

// export async function getFilteredAnime(title) {
//   return db
//     .prepare(`SELECT * FROM animelist WHERE title LIKE ?`)
//     .all("%" + title + "%");
// }
// export async function getFilteredAnime(title) {
//   // Assuming `db` is your SQLite database connection
//   // title = "One P";
//   console.log("tile vale", title);

//   return db
//     .prepare("SELECT title FROM animelist WHERE title LIKE ?")
//     .all("%" + title + "%");
//   // return db.prepare(`SELECT * FROM animelist WHERE title=?`).get(title);
// }
