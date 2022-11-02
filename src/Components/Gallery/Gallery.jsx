import styles from "./Gallery.module.css";
import "../../styles/global.css";
import DropDown from "../DropDown/DropDown";
import ImageContainer from "../ImageContainer/ImageContainer";
import ScrollingImageContainer from "../ScrollingImageContainer/ScrollingImageContainer";

function Gallery() {
  return (
    <div className={styles.gallery_container}>
      <DropDown />
      <ImageContainer />
      <ScrollingImageContainer />
    </div>
  );
}

export default Gallery;
