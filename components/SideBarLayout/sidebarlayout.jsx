import styles from "./sidebarlayout.module.css";

export default async function SideBarLayout({ children }) {
  return <div className={styles.main}>{children}</div>;
}
