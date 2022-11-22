import styles from "./Gallery.module.css";
import ImageContainer from "../ImageContainer/ImageContainer";
import ScrollingImageContainer from "../ScrollingImageContainer/ScrollingImageContainer";
import { useState } from "react";
import { TITLE } from "../../utils/constants";
import CustomDropDown from "../CustomDropDown/CustomDropDown";
import { setBreedImageData, setDropdownData } from "../../utils/helper";

function Gallery() {
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedBreedName, setSelectedBreedName] = useState(
    TITLE.defaultDropdownTitle
  );
  const [imageList, setImageList] = useState([]);
  const [dropDownList, setDropDownList] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  // Get the ImageIndex from the dropdown component functionality
  const getImageIndex = (indexValue) => {
    setImageIndex(indexValue);
  };

  // set the selected Item in the dropdown list
  const setSelectedItem = (e) => {
    setDropDownOpen((dropDownOpen) => !dropDownOpen);
    setSelectedBreedName(e.target.value);
    setBreedImageData(e.target.value, setImageList);
  };

  // dropdown header click functionality
  const onClickDropDownHeader = () => {
    setDropdownData(setDropDownList);
  };

  return (
    <div className={styles.gallery_container}>
      <div className={styles.drop_down}>
        <CustomDropDown
          dropDownList={dropDownList}
          onChange={setSelectedItem}
          defaultValue={selectedBreedName}
          clickHandler={onClickDropDownHeader}
        />
      </div>
      <ImageContainer imageList={imageList[imageIndex]} />
      <ScrollingImageContainer
        imageList={imageList}
        dropDownStatus={dropDownOpen}
        getImageIndex={getImageIndex}
      />
    </div>
  );
}

export default Gallery;
