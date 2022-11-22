import React, { useEffect, useState } from "react";
import {
  ACTIVATE_BTN,
  ID,
  INITIAL_INDEX_VALUE,
  SCROLL_OFFSET,
  STATUS,
  TITLE,
} from "../../utils/constants";
import Button from "../Button/Button";
import styles from "./ScrollingImageContainer.module.css";

function ScrollingImageContainer({ imageList, dropDownStatus, getImageIndex }) {
  const [previousIndexValue, setPreviousIndexValue] =
    useState(INITIAL_INDEX_VALUE);

  useEffect(() => {
    setPreviousIndexValue(INITIAL_INDEX_VALUE);
  }, [dropDownStatus]);

  // onClick of ImageItem in ScrollingImage Container
  const onClickScrollableImageItem = (imageIndex) => {
    setPreviousIndexValue(imageIndex);
    getImageIndex(imageIndex);
  };

  // slider button functionality
  const onclickSliderBtn = (btnStatus) => {
    const slider = document.getElementById(ID.sliderId);
    if (btnStatus === STATUS.previousBtnStatus) {
      setPreviousIndexValue(previousIndexValue - 1);
      slider.scrollLeft -= SCROLL_OFFSET;
      getImageIndex(previousIndexValue - 1);
    } else {
      setPreviousIndexValue(previousIndexValue + 1);
      slider.scrollLeft += SCROLL_OFFSET;
      getImageIndex(previousIndexValue + 1);
    }
  };

  return (
    <div className="image_container">
      <Button
        title={TITLE.previousBtnTitle}
        clickHandler={() => {
          onclickSliderBtn(STATUS.previousBtnStatus);
        }}
        disabled={previousIndexValue < 1}
      />
      <Button
        title={TITLE.previousBtnTitle}
        position={styles.BtnPosition}
        clickHandler={() => {
          onclickSliderBtn(STATUS.previousBtnStatus);
        }}
        disabled={previousIndexValue < 1}
      />
      <div className={styles.scrolling_image_container} id={ID.sliderId}>
        <div className={styles.slides}>
          {imageList.map((selectedItem, imageIndex) => {
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
                  alt="dog breed_image"
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
        title={TITLE.nextBtnTitle}
        position={styles.BtnPosition}
        style={ACTIVATE_BTN}
        clickHandler={() => {
          onclickSliderBtn(STATUS.nextBtnStatus);
        }}
        disabled={previousIndexValue >= imageList.length - 1}
      />
      <Button
        title={TITLE.nextBtnTitle}
        style={ACTIVATE_BTN}
        clickHandler={() => {
          onclickSliderBtn(STATUS.nextBtnStatus);
        }}
        disabled={previousIndexValue >= imageList.length - 1}
      />
    </div>
  );
}

export default ScrollingImageContainer;
