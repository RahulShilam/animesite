import styles from "./mainsectionlayout.module.css";

export default async function MainSectionLayout({ children }) {
  return <div className={styles.main}>{children}</div>;
}
