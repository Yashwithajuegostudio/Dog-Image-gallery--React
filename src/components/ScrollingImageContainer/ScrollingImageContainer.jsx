import React, { useEffect, useState } from "react";
import {
  activateBtn,
  initialStateValue,
  status,
  title,
} from "../../utils/constants";
import Button from "../Button/Button";
import styles from "./ScrollingImageContainer.module.css";

function ScrollingImageContainer({ image, dropDownStatus, getImageIndex }) {
  const [previousIndexValue, setPreviousIndexValue] =
    useState(initialStateValue);

  useEffect(() => {
    setPreviousIndexValue(initialStateValue);
  }, [dropDownStatus]);

  // onClick of ImageItem in ScrollingImage Container
  const onClickScrollableImageItem = (imageIndex) => {
    setPreviousIndexValue(imageIndex);
    getImageIndex(imageIndex);
  };

  // slider button functionality
  const onclickSliderBtn = (btnStatus) => {
    btnStatus === status.previousBtnStatus
      ? setPreviousIndexValue(previousIndexValue - 1)(
          getImageIndex(previousIndexValue - 1)
        )
      : setPreviousIndexValue(previousIndexValue + 1)(
          getImageIndex(previousIndexValue + 1)
        );
  };

  return (
    <div className="image_container">
      <Button
        title={title.previousBtnTitle}
        clickHandler={() => {
          onclickSliderBtn(status.previousBtnStatus);
        }}
        disabled={previousIndexValue < 1}
      />
      <Button
        title={title.previousBtnTitle}
        position={styles.BtnPosition}
        clickHandler={() => {
          onclickSliderBtn(status.previousBtnStatus);
        }}
        disabled={previousIndexValue < 1}
      />
      <div className={styles.scrolling_image_container}>
        <div className={styles.slides}>
          {image.map((selectedItem, imageIndex) => {
            return (
              <div
                className={styles.dog_breed_image_container}
                key={imageIndex}
              >
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
      <Button
        title={title.nextBtnTitle}
        position={styles.BtnPosition}
        style={activateBtn}
        clickHandler={() => {
          onclickSliderBtn(status.nextBtnStatus);
        }}
        disabled={previousIndexValue >= image.length - 1}
      />
      <Button
        title={title.nextBtnTitle}
        style={activateBtn}
        clickHandler={() => {
          onclickSliderBtn(status.nextBtnStatus);
        }}
        disabled={previousIndexValue >= image.length - 1}
      />
    </div>
  );
}

export default ScrollingImageContainer;
