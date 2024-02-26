import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "fs";
const db = sql("animelist.db");

export async function getAnimeList() {
  //run-to insert all=>to retrive get=>get single row
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM animelist").all();
}

export async function getAnimeInfo(slug) {
  return db.prepare(`SELECT * FROM animelist WHERE slug=?`).get(slug);
}

export async function getFilteredAnime(title) {
  return title.length > 0
    ? db
        .prepare(`SELECT * FROM animelist WHERE title LIKE ?`)
        .all("%" + title + "%")
    : "";
}

export async function getAlphabeticalSortedAnimeList() {
  return db.prepare(`SELECT * FROM animelist ORDER BY title`).all();
}

export async function saveAnime(animedata) {
  const slug = slugify(animedata.title, { lower: true });
  animedata.slug = slug;
  const information = xss(animedata.information);

  const extension = animedata.image.name.split(".").pop();
  const fileName = `${animedata.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await animedata.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving Anime Failed");
    }
  });
  animedata.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO animelist (title,slug,episode,image,summary,information,creator) VALUES (@title,
    @slug,
    @episode,
    @image,
    @summary,
    @information,
    @creator)`
  ).run(animedata);
}
