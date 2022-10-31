import React from "react";
import DropDown from "../DropDown/DropDown";
import ImageContainer from "../ImageContainer/ImageContainer";
import ScrollingImageContainer from "../ScrollingImageContainer/ScrollingImageContainer";
import styles from "./Gallery.module.css";
import "../../styles/global.css";

function Gallery() {
  return (
    <div className={styles.gallery_conatiner}>
      <DropDown />
      <ImageContainer />
      <ScrollingImageContainer />
    </div>
  );
}

export default Gallery;
