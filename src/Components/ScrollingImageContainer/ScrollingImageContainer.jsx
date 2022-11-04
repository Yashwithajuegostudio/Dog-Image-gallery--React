import React, { useEffect, useState } from "react";
import { activateBtn, initialStateValue, title } from "../../utils/constants";
import Button from "../Button/Button";
import styles from "./ScrollingImageContainer.module.css";

function ScrollingImageContainer({ image, dropDownStatus, getImageIndex }) {
  const [previousIndexValue, setPreviousIndexValue] =
    useState(initialStateValue);
  const [, setDisable] = useState(false);
  useEffect(() => {
    setPreviousIndexValue(initialStateValue);
  }, [dropDownStatus, image]);

  // onClick of ImageItem in ScrollingImage Container
  const onClickScrollableImageItem = (imageIndex, imagePath) => {
    setPreviousIndexValue(imageIndex);
  };
  getImageIndex(previousIndexValue);
  // onClick functionality for previous slider button
  const onclickPreviousBtn = () => {
    setPreviousIndexValue(previousIndexValue - 1);
  };

  // onClick functionality for previous slider button
  const onclickNextBtn = () => {
    if (previousIndexValue === image.length - 2) {
      setDisable(true);
    }
    setPreviousIndexValue(previousIndexValue + 1);
  };
  return (
    <div className="image_container">
      <Button
        title={title.previousBtnTitle}
        clickHandler={onclickPreviousBtn}
        disabled={previousIndexValue < 1}
      ></Button>
      <Button
        title={title.previousBtnTitle}
        id={styles.BtnPosition}
        clickHandler={onclickPreviousBtn}
        disabled={previousIndexValue < 1}
      ></Button>
      <div className={styles.scrolling_image_container}>
        <div className={styles.slides}>
          {image.map((selectedItem, imageIndex) => {
            return (
              <div className={styles.dog_breed_image_container}>
                <img
                  className={
                    imageIndex === previousIndexValue ? styles.active : ""
                  }
                  src={selectedItem}
                  alt={title.scrollableImageTitle}
                  onClick={() => {
                    onClickScrollableImageItem(imageIndex, selectedItem);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Button
        title={title.nextBtnTitle}
        id={styles.BtnPosition}
        style={activateBtn}
        clickHandler={onclickNextBtn}
        disabled={previousIndexValue > image.length - 2}
      ></Button>
      <Button
        title={title.nextBtnTitle}
        style={activateBtn}
        clickHandler={onclickNextBtn}
        disabled={previousIndexValue > image.length - 2}
      ></Button>
    </div>
  );
}

export default ScrollingImageContainer;
