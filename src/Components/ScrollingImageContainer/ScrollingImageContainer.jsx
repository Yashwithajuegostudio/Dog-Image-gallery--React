import React from "react";
import { enabled, title } from "../../utils/constants";
import Button from "../Button/Button";

import styles from "./ScrollingImageContainer.module.css";

function ScrollingImageContainer(props) {
  return (
    <div className="image_container">
      <Button title={title.previousBtnTitle}></Button>
      <div className={styles.scrolling_image_container}>
        <div className={styles.slides}>
          {props.image.map((selectedItem) => {
            let activeImage;
            props.image[0] === selectedItem
              ? (activeImage = true)
              : (activeImage = false);

            return (
              <div className={styles.dog_breed_image_container}>
                <img
                  className={activeImage ? styles.active : ""}
                  src={selectedItem}
                  alt="scrollableImage"
                />
              </div>
            );
          })}
        </div>
      </div>
      <Button title={title.nextBtnTitle} style={enabled}></Button>
    </div>
  );
}

export default ScrollingImageContainer;
