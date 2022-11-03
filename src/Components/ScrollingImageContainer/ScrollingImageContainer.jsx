import React, { useEffect, useState } from "react";
import { activateBtn, initialStateValue, title } from "../../utils/constants";
import Button from "../Button/Button";
import styles from "./ScrollingImageContainer.module.css";

function ScrollingImageContainer(props) {
  const [previousIndexValue, setPreviousIndexValue] =
    useState(initialStateValue);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    setPreviousIndexValue(initialStateValue);
  }, [props.dropDownStatus, props.image]);

  // onClick of ImageItem in ScrollingImage Container
  const onClickScrollableImageItem = (imageIndex, imagePath) => {
    setPreviousIndexValue(imageIndex);
    props.onClickImgHandler(imagePath);
  };
  props.getImageIndex(previousIndexValue);
  // onClick functionality for previous slider button
  const onclickPreviousBtn = () => {
    setPreviousIndexValue(previousIndexValue - 1);
    const imagePath = props.image.filter(
      (item, index) => index === previousIndexValue - 1
    );
    props.onClickImgHandler(imagePath);
  };

  // onClick functionality for previous slider button
  const onclickNextBtn = () => {
    if (previousIndexValue === props.image.length - 2) {
      setDisable(true);
    }
    setPreviousIndexValue(previousIndexValue + 1);
    const imagePath = props.image.filter(
      (item, index) => index === previousIndexValue + 1
    );
    props.onClickImgHandler(imagePath);
  };
  return (
    <div className="image_container">
      <Button
        title={title.previousBtnTitle}
        clickHandler={onclickPreviousBtn}
        disabled={previousIndexValue < 1}
      ></Button>
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
        style={activateBtn}
        clickHandler={onclickNextBtn}
        disabled={previousIndexValue > props.image.length - 2}
      ></Button>
    </div>
  );
}

export default ScrollingImageContainer;
