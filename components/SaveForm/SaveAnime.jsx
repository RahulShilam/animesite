import ImagePicker from "../ImagePicker/imagepicker";
import Button from "./Button";
import styles from "./SaveAnime.module.css";
import { handleFormData } from "@/lib/actions";

export default function SaveAnime({}) {
  return (
    <div className={styles.main}>
      <form style={{ color: "white" }} action={handleFormData}>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter anime name"
          required
        ></input>
        <label htmlFor="episode">Episode</label>
        <input
          type="number"
          min="1"
          max="1200"
          id="episode"
          name="episode"
          placeholder="Enter anime Episode"
          required
        ></input>
        <label htmlFor="summary">Summary</label>
        <textarea
          type="text"
          id="summary"
          name="summary"
          placeholder="Enter anime Summary"
          required
        ></textarea>
        <label htmlFor="information">Description</label>
        <textarea
          type="text"
          id="information"
          name="information"
          placeholder="Enter anime information"
          required
        />
        <label htmlFor="creator">Creator</label>
        <input
          type="text"
          id="creator"
          name="creator"
          placeholder="Writer Name"
          required
        ></input>
        <ImagePicker label="Select an Image" name="image" />
        <div style={{ textAlign: "center" }}>
          <Button />
        </div>
      </form>
    </div>
  );
}
