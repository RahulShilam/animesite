import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import animeicon from "@/assets/anime-icon.png";
import NavLink from "./nav-link";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.link} href="/">
        <Image src={animeicon} alt="gogoanime-logo" priority></Image>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            {" "}
            <NavLink href="/home">Home</NavLink>
          </li>
          <li className={styles.li}>
            <NavLink href="/animelist">Anime List</NavLink>
          </li>
          <li className={styles.li}>
            {" "}
            <NavLink href="/saveanime">Save Anime</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
