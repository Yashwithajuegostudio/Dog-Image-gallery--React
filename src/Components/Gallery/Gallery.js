import React from "react";
import DropDown from "../DropDown/DropDown";
import ImageContainer from "../ImageContainer/ImageContainer";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.gallery_conatiner}>
      <DropDown />
      <ImageContainer />
    </div>
  );
}

export default Gallery;
