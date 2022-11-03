import React, { useEffect, useState } from "react";
import { activateBtn, initialStateValue, title } from "../../utils/constants";
import Button from "../Button/Button";
import styles from "./ScrollingImageContainer.module.css";

function ScrollingImageContainer(props) {
  const [previousIndexValue, setPreviousIndexValue] =
    useState(initialStateValue);
  useEffect(() => {
    setPreviousIndexValue(initialStateValue);
  }, [props.dropDownStatus]);

  // onClick of ImageItem in ScrollingImage Container
  const onClickScrollableImageItem = (imageIndex) => {
    setPreviousIndexValue(imageIndex);
  };

  return (
    <div className="image_container">
      <Button title={title.previousBtnTitle}></Button>
      <div className={styles.scrolling_image_container}>
        <div className={styles.slides}>
          {props.image.map((selectedItem, imageIndex) => {
            return (
              <div className={styles.dog_breed_image_container}>
                <img
                  className={
                    imageIndex === previousIndexValue ? styles.active : ""
                  }
                  src={selectedItem}
                  alt={title.scrollableImageTitle}
                  onClick={() => {
                    onClickScrollableImageItem(imageIndex);
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
