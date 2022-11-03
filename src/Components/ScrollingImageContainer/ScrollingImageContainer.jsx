import React, { useEffect, useState } from "react";
import { activateBtn, title } from "../../utils/constants";
import Button from "../Button/Button";

import styles from "./ScrollingImageContainer.module.css";

function ScrollingImageContainer(props) {
  const [previousIndexValue, setPreviousIndexValue] = useState(0);
  useEffect(() => {
    setPreviousIndexValue(0);
  }, [props.status]);
  const onClickScrollableImageItem = (index) => {
    setPreviousIndexValue(index);
  };

  return (
    <div className="image_container">
      <Button title={title.previousBtnTitle}></Button>
      <div className={styles.scrolling_image_container}>
        <div className={styles.slides}>
          {props.image.map((selectedItem, index) => {
            return (
              <div className={styles.dog_breed_image_container}>
                <img
                  className={index === previousIndexValue ? styles.active : ""}
                  src={selectedItem}
                  alt="scrollableImage"
                  onClick={() => {
                    onClickScrollableImageItem(index);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Button title={title.nextBtnTitle} style={activateBtn}></Button>
    </div>
  );
}

export default ScrollingImageContainer;
