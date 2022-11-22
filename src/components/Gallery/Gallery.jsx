import styles from "./Gallery.module.css";
import DropDown from "../Dropdown/Dropdown";
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

function Gallery() {
  const [imageIndex, setImageIndex] = useState(0);
  const [dropDownStatusValue, setDropDownStatusValue] = useState();
  const [imageList, setImageList] = useState([]);
  const [dropDownList, setDropDownList] = useState([]);
  const [dropDownTitle, setDropdownTitle] = useState(
    title.defaultDropdownTitle
  );
  const [dropDownOpen, setDropDownOpen] = useState(false);

  // Get the ImageIndex from the dropdown component functionality
  const getImageIndex = (indexValue) => {
    setImageIndex(indexValue);
  };

  // get the dropdown status from the dropdown component functionality
  const setDropDownStatus = (dropDownStatus) => {
    setDropDownStatusValue(dropDownStatus);
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

  // OnClick of selectedItem in dropdown List
  const onClickSelectedItemClicked = async (selectedItem) => {
    setDropdownTitle(selectedItem);
    setDropDownStatus(dropDownTitle);
    setDropDownOpen((prevOpen) => !prevOpen);
    setBreedImageData(selectedItem);
  };

  // onClick of Dropdown Header
  const dropdownHeader = async () => {
    setDropDownOpen((prevOpen) => !prevOpen);
    setDropdownData();
    return dropDownTitle;
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
        dropDownList={dropDownList}
        onClickDropdownHeader={dropdownHeader}
        dropDownTitle={dropDownTitle}
        dropDownOpen={dropDownOpen}
        onClickSelectedItemClicked={onClickSelectedItemClicked}
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
