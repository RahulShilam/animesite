import { getAnimeList } from "@/lib/animelist";
import styles from "./dashboardanime.module.scss";
import Link from "next/link";
import Image from "next/image";
import AnimeHeader from "../AnimeHeader/animeheader";

export default async function DashboardAnime() {
  const animelist = await getAnimeList();
  return (
    <>
      <AnimeHeader text="RECENT RELEASES" />
      <div className={styles.main}>
        {animelist.map((anime) => {
          return (
            <div className={styles.container} key={anime.id}>
              <Link href={`/animelist/${anime.slug}`} className={styles.link}>
                <Image
                  src={anime.image}
                  alt={anime.title}
                  className={styles.img}
                  width={100}
                  height={200}
                  quality={100}
                  priority={true}
                  unoptimized
                ></Image>
                <p>{anime.title}</p>
                <p>Episode: {anime.episode}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
