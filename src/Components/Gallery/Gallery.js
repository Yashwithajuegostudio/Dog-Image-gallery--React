import React from "react";
import DropDown from "../DropDown/DropDown";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.gallery_conatiner}>
      <DropDown />
    </div>
  );
}

export default Gallery;
