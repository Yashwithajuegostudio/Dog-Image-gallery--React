import { title, initialStateValue } from "../../utils/constants";

import styles from "./ImageContainer.module.css";

function ImageContainer({ image, imageIndex }) {
  return (
    <div className="image_container">
      <div className={styles.main_image_container}>
        {image.length !== initialStateValue && (
          <img
            src={image[imageIndex]}
            alt={title.defaultImageTitle}
            className={styles.default_image}
          />
        )}
      </div>
    </div>
  );
}

export default ImageContainer;
