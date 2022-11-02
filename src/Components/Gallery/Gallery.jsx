import styles from "./Gallery.module.css";
import "../../styles/global.css";
import DropDown from "../DropDown/DropDown";

function Gallery() {
  return (
    <div className={styles.gallery_container}>
      <DropDown />
    </div>
  );
}

export default Gallery;
