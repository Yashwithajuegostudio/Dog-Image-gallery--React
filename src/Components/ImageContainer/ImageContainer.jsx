import { useState } from "react";
import { activateBtn, title, initialStateValue } from "../../utils/constants";
import Button from "../Button/Button";
import styles from "./ImageContainer.module.css";

function ImageContainer(props) {
  console.log(props.imageIndex);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [disable, setDisable] = useState(false);
  const onclickNextBtn = () => {
    console.log("prev btn clicked");
  };
  const onclickPreviousBtn = () => {};
  return (
    <div className="image_container">
      <Button
        title={title.previousBtnTitle}
        clickHandler={onclickPreviousBtn}
        // disabled={previousIndexValue < 1}
      ></Button>

      <div className={styles.main_image_container}>
        {props.image.length !== initialStateValue && (
          <img
            src={props.image[props.imageIndex]}
            alt={title.defaultImageTitle}
            className={styles.default_image}
          />
        )}
      </div>
      <Button
        title={title.nextBtnTitle}
        style={activateBtn}
        clickHandler={onclickNextBtn}
        // disabled={previousIndexValue > props.image.length - 2}
      ></Button>
    </div>
  );
}

export default ImageContainer;
