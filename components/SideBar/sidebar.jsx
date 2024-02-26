import { getAnimeList } from "@/lib/animelist";
import Link from "next/link";
import styles from "./sidebar.module.css";
import AnimeHeader from "../AnimeHeader/animeheader";

export default async function SideBar() {
  const animelist = await getAnimeList();
  return (
    <div>
      <AnimeHeader text="POPULAR" />
      {animelist.map((anime) => {
        return (
          <div className={styles.div} key={anime.id}>
            <Link className={styles.link} href={`/animelist/${anime.slug}`}>
              {anime.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
