import styles from "./Gallery.module.css";
import "../../styles/global.css";
import DropDown from "../DropDown/DropDown";
import ImageContainer from "../ImageContainer/ImageContainer";
import ScrollingImageContainer from "../ScrollingImageContainer/ScrollingImageContainer";
import { useState } from "react";

function Gallery() {
  const [imageIndex, setImageIndex] = useState(0);
  const [dropDownStatus, setDropDownStatus] = useState();
  const [imageList, setImageList] = useState([]);

  // Get the ImageIndex from the dropdown component functionality
  const getImageIndex = (indexValue) => {
    setImageIndex(indexValue);
  };

  // get the Image List from the dropdown component functionality
  const getImageList = (imageList) => {
    setImageList(imageList);
  };
  // get the dropdown status from the dropdown component functionality
  const getDropDownStatus = (dropDownStatus) => {
    setDropDownStatus(dropDownStatus);
  };
  return (
    <div className={styles.gallery_container}>
      <DropDown
        getImageList={getImageList}
        getDropDownStatus={getDropDownStatus}
      />
      <ImageContainer image={imageList} imageIndex={imageIndex} />
      <ScrollingImageContainer
        image={imageList}
        dropDownStatus={dropDownStatus}
        getImageIndex={getImageIndex}
      />
    </div>
  );
}

export default Gallery;
