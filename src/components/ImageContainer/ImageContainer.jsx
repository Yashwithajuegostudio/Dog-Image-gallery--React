import { title } from "../../utils/constants";

import styles from "./ImageContainer.module.css";

function ImageContainer({ imageList }) {
  return (
    <div className="image_container">
      <div className={styles.main_image_container}>
        {imageList && (
          <img
            src={imageList}
            alt={title.defaultImageTitle}
            className={styles.default_image}
          />
        )}
      </div>
    </div>
  );
}

export default ImageContainer;
