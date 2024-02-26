import styles from "./animeheader.module.css";
export default function AnimeHeader(props) {
  return (
    <div className={styles.main}>
      <div>{props.text}</div>
    </div>
  );
}
