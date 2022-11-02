import React from "react";
import { enabled, title } from "../../utils/constants";
import Button from "../Button/Button";
import styles from "./ImageContainer.module.css";

function ImageContainer() {
  return (
    <div className="image_container">
      <Button title={title.previousBtnTitle}></Button>
      <div className={styles.main_image_container}></div>
      <Button title={title.nextBtnTitle} style={enabled}></Button>
    </div>
  );
}

export default ImageContainer;
