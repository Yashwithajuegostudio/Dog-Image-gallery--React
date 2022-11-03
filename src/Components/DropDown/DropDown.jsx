import React, { useState } from "react";
import { getApiCall } from "../../services/apiServices";
import { BreedImageList, breedList, title } from "../../utils/constants";
import ImageContainer from "../ImageContainer/ImageContainer";
import ScrollingImageContainer from "../ScrollingImageContainer/ScrollingImageContainer";
import styles from "./DropDown.module.css";

function DropDown() {
  const [DropdownTitle, setDropdownTitle] = useState(
    title.defaultDropdownTitle
  );
  const [DropDownList, setDropDownList] = useState([]);
  const [open, setOpen] = useState(false);
  const [defaultImage, setDefaultImage] = useState([]);
  const [ScrollableImageList, setScrollableImageList] = useState([]);
  const onClickSelectedItemClicked = async (selectedItem) => {
    setDropdownTitle(selectedItem);
    setOpen((prevOpen) => !prevOpen);
    try {
      const responseData = await getApiCall(
        BreedImageList.replace(`breed/`, `breed/${selectedItem}/`)
      ).then((data) => {
        if (data.status !== "success") {
          throw Error("Something went wrong");
        }
        return data.message;
      });
      const breedImageArray = Object.values(responseData).filter(
        (value) => value.length > 0
      );
      setDefaultImage(breedImageArray[0]);
      setScrollableImageList(breedImageArray);
    } catch (error) {
      console.error(error);
    }
  };
  const onClickDropdownHeader = async () => {
    setOpen((prevOpen) => !prevOpen);
    try {
      const responseData = await getApiCall(breedList).then((data) => {
        if (data.status !== "success") {
          throw Error("Something went wrong");
        }
        return data.message;
      });
      const breedNameList = Object.keys(responseData).filter(
        (key) => key.length > 0
      );
      setDropDownList(breedNameList);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.drop_down}>
      <div
        className={styles.drop_down_btn}
        onClick={() => {
          onClickDropdownHeader();
        }}
      >
        {DropdownTitle}
      </div>
      {open && (
        <div className={styles.content}>
          {DropDownList.map((selectedItem) => {
            return (
              <option
                onClick={() => {
                  onClickSelectedItemClicked(selectedItem);
                }}
              >
                {selectedItem}
              </option>
            );
          })}
        </div>
      )}
      <ImageContainer image={defaultImage} />
      <ScrollingImageContainer
        image={ScrollableImageList}
        status={DropdownTitle}
      />
    </div>
  );
}

export default DropDown;
