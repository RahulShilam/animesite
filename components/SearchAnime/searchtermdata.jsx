import { getFilteredAnime } from "@/lib/animelist";
import Link from "next/link";
import styles from "./searchtermdata.module.css";

export async function SearchTermData({ query }) {
  const animeInfo = await getFilteredAnime(query);
  return (
    <>
      {animeInfo && animeInfo.length > 0 ? (
        <div className={styles.main}>
          {animeInfo.map((anime) => (
            <Link
              key={anime.id}
              className={styles.link}
              href={`/animelist/${anime.slug}`}
            >
              <p key={anime.slug}>{anime.title}</p>
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
