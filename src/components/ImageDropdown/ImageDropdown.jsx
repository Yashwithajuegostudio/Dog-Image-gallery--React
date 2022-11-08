import React, { useState } from "react";

import { getApiCall } from "../../services/apiServices";
import { breedList, title, INITIAL_INDEX_VALUE } from "../../utils/constants";

import styles from "./ImageDropdown.module.css";

function DropDown({ setDropDownStatus, setBreedImageData }) {
  const [DropdownTitle, setDropdownTitle] = useState(
    title.defaultDropdownTitle
  );
  const [DropDownList, setDropDownList] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  // OnClick of selectedItem in dropdown List
  const onClickSelectedItemClicked = async (selectedItem) => {
    setDropdownTitle(selectedItem);
    setDropDownStatus(DropdownTitle);
    setDropDownOpen((prevOpen) => !prevOpen);
    setBreedImageData(selectedItem);
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
  // onClick of Dropdown Header
  const onClickDropdownHeader = async () => {
    setDropDownOpen((prevOpen) => !prevOpen);
    setDropdownData();
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
      {dropDownOpen && (
        <div className={styles.content}>
          {DropDownList.map((selectedItem, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  onClickSelectedItemClicked(selectedItem);
                }}
              >
                {selectedItem}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDown;
