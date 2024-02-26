"use client";

import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";
import Link from "next/link";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      className={
        path.includes(href) ? `${styles.link} ${styles.active}` : styles.link
      }
      // style={{ fontWeight: path.includes("/home") ? "bold" : "unset" }}
      href={href}
    >
      {children}
    </Link>
  );
}
