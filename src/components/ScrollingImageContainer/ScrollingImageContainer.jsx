import React, { useEffect, useState } from "react";
import {
  activateBtn,
  ID,
  INITIAL_INDEX_VALUE,
  OFFSET,
  status,
  title,
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
    if (btnStatus === status.previousBtnStatus) {
      setPreviousIndexValue(previousIndexValue - 1);
      slider.scrollLeft -= OFFSET;
      getImageIndex(previousIndexValue - 1);
    } else {
      setPreviousIndexValue(previousIndexValue + 1);
      slider.scrollLeft += OFFSET;
      getImageIndex(previousIndexValue + 1);
    }
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
        title={title.nextBtnTitle}
        position={styles.BtnPosition}
        style={activateBtn}
        clickHandler={() => {
          onclickSliderBtn(status.nextBtnStatus);
        }}
        disabled={previousIndexValue >= imageList.length - 1}
      />
      <Button
        title={title.nextBtnTitle}
        style={activateBtn}
        clickHandler={() => {
          onclickSliderBtn(status.nextBtnStatus);
        }}
        disabled={previousIndexValue >= imageList.length - 1}
      />
    </div>
  );
}

export default ScrollingImageContainer;
