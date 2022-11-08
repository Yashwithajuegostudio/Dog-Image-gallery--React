import styles from "./Gallery.module.css";
import DropDown from "../ImageDropdown/ImageDropdown";
import ImageContainer from "../ImageContainer/ImageContainer";
import ScrollingImageContainer from "../ScrollingImageContainer/ScrollingImageContainer";
import { useState } from "react";
import { getApiCall } from "../../services/apiServices";
import { BreedImageList, INITIAL_INDEX_VALUE } from "../../utils/constants";

function Gallery() {
  const [imageIndex, setImageIndex] = useState(0);
  const [dropDownStatusValue, setDropDownStatusValue] = useState();
  const [imageList, setImageList] = useState([]);

  // Get the ImageIndex from the dropdown component functionality
  const getImageIndex = (indexValue) => {
    setImageIndex(indexValue);
  };

  // get the dropdown status from the dropdown component functionality
  const setDropDownStatus = (dropDownStatus) => {
    setDropDownStatusValue(dropDownStatus);
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
  return (
    <div className={styles.gallery_container}>
      <DropDown
        setDropDownStatus={setDropDownStatus}
        setBreedImageData={setBreedImageData}
      />
      <ImageContainer imageList={imageList[imageIndex]} />
      <ScrollingImageContainer
        imageList={imageList}
        dropDownStatus={dropDownStatusValue}
        getImageIndex={getImageIndex}
      />
    </div>
  );
}

export default Gallery;
