import { enabled, title } from "../../utils/constants";
import Button from "../Button/Button";
import styles from "./ImageContainer.module.css";

function ImageContainer(props) {
  return (
    <div className="image_container">
      <Button title={title.previousBtnTitle}></Button>
      <div className={styles.main_image_container}>
        {props.image.length !== 0 && (
          <img
            src={props.image}
            alt="defaultImage"
            className={styles.default_image}
          />
        )}
      </div>
      <Button title={title.nextBtnTitle} style={enabled}></Button>
    </div>
  );
}

export default ImageContainer;