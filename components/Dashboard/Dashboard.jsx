import Image from "next/image";
import animeicon from "@/assets/anime-icon.png";
import searchicon from "@/assets/search-icon.png";
import Link from "next/link";
import SearchAnime from "../SearchAnime/searchanime";
import { SearchTermData } from "../SearchAnime/searchtermdata";
import { Suspense } from "react";
import styles from "./Dashboard.module.css";

export default async function Dashboard({ searchParams }) {
  const query = searchParams?.query || "";
  return (
    <div>
      <div className={styles.main}>
        <div>
          <Image
            className={styles.icon}
            src={animeicon}
            alt="gogoanime-logo"
          ></Image>
        </div>
        <div className={styles.search}>
          <SearchAnime />
          <Suspense key={query} fallback={<>Loading...</>}>
            <SearchTermData query={query} />
          </Suspense>
          <Image
            className={styles.img}
            src={searchicon}
            alt="search anime"
          ></Image>
        </div>
        <div>It is a Clone of Gogoanime!</div>
        <div className={styles.btn}>
          <Link href="/home">
            <button className={styles["btn-size"]}>
              <span className={styles["btn-style"]}>GO TO HOME PAGE</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
