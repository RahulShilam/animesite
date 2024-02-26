import { getAlphabeticalSortedAnimeList } from "@/lib/animelist";
import styles from "./allanime.module.css";
import Link from "next/link";

export default async function AllAnime() {
  const animelist = await getAlphabeticalSortedAnimeList();
  return (
    <div className={styles.main}>
      {animelist.map((anime) => {
        return (
          <span className={styles.spacing} key={anime.id}>
            <Link className={styles.link} href={`/animelist/${anime.slug}`}>
              {anime.title}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
