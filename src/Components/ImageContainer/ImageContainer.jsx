import { activateBtn, title, initialStateValue } from "../../utils/constants";
import Button from "../Button/Button";
import styles from "./ImageContainer.module.css";

function ImageContainer(props) {
  return (
    <div className="image_container">
      <Button title={title.previousBtnTitle}></Button>
      <div className={styles.main_image_container}>
        {props.image.length !== initialStateValue && (
          <img
            src={props.image}
            alt={title.defaultImageTitle}
            className={styles.default_image}
          />
        )}
      </div>
      <Button title={title.nextBtnTitle} style={activateBtn}></Button>
    </div>
  );
}

export default ImageContainer;
