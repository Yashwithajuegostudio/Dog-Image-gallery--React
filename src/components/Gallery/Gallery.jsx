import styles from "./Gallery.module.css";
import ImageContainer from "../ImageContainer/ImageContainer";
import ScrollingImageContainer from "../ScrollingImageContainer/ScrollingImageContainer";
import { useState } from "react";
import { getApiCall } from "../../services/apiServices";
import {
  BreedImageList,
  breedList,
  INITIAL_INDEX_VALUE,
  title,
} from "../../utils/constants";
import CustomDropDown from "../CustomDropDown/CustomDropDown";

function Gallery() {
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedBreedName, setSelectedBreedName] = useState(
    title.defaultDropdownTitle
  );
  const [imageList, setImageList] = useState([]);
  const [dropDownList, setDropDownList] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  // Get the ImageIndex from the dropdown component functionality
  const getImageIndex = (indexValue) => {
    setImageIndex(indexValue);
  };

  // set the drop down header title
  const setDropdownData = async () => {
    try {
      const breedNameListData = await getApiCall(breedList);
      if (breedNameListData) {
        const breedNameList = Object.keys(breedNameListData).filter(
          (key) => key.length > INITIAL_INDEX_VALUE
        );
        setDropDownList(breedNameList);
      }
    } catch (error) {
      alert(error);
    }
  };

  // set Breed Image data
  const setBreedImageData = async (breedNameData) => {
    try {
      const breedImageListData = await getApiCall(
        BreedImageList.replace(`breed/`, `breed/${breedNameData}/`)
      );
      if (breedImageListData) {
        const breedImageArray = Object.values(breedImageListData).filter(
          (value) => value.length > INITIAL_INDEX_VALUE
        );
        setImageList(breedImageArray);
      }
    } catch (error) {
      alert(error);
    }
  };

  const setSelectedItem = (e) => {
    setDropDownOpen((dropDownOpen) => !dropDownOpen);
    setSelectedBreedName(e.target.value);
    setBreedImageData(e.target.value);
  };
  const handleClick = () => {
    setDropdownData();
  };
  return (
    <div className={styles.gallery_container}>
      <div className={styles.drop_down}>
        <CustomDropDown
          dropDownList={dropDownList}
          onChange={setSelectedItem}
          defaultValue={selectedBreedName}
          clickHandler={handleClick}
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
