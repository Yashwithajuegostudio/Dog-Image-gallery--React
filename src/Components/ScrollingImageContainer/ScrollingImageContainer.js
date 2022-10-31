import React from "react";
import { enabled, title } from "../../utils/constants";
import Button from "../Button/Button";
import styles from "./ScrollingImageContainer.module.css";

function ScrollingImageContainer() {
  return (
    <div className="image_container">
      <Button title={title.previousBtnTitle}></Button>
      <div className={styles.scrolling_image_container}>
        <div className="styles.slides"></div>
      </div>
      <Button title={title.nextBtnTitle} style={enabled}></Button>
    </div>
  );
}

export default ScrollingImageContainer;
