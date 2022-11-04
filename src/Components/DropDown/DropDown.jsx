import React, { useState } from "react";

import { getApiCall } from "../../services/apiServices";
import {
  BreedImageList,
  breedList,
  initialStateValue,
  errorMessage,
  successStatus,
  title,
} from "../../utils/constants";

import styles from "./DropDown.module.css";

function DropDown({ getImageList, getDropDownStatus }) {
  const [DropdownTitle, setDropdownTitle] = useState(
    title.defaultDropdownTitle
  );
  const [DropDownList, setDropDownList] = useState([]);
  const [open, setOpen] = useState(false);

  // OnClick of selectedItem in dropdown List
  const onClickSelectedItemClicked = async (selectedItem) => {
    setDropdownTitle(selectedItem);
    getDropDownStatus(DropdownTitle);
    setOpen((prevOpen) => !prevOpen);
    try {
      const responseData = await getApiCall(
        BreedImageList.replace(`breed/`, `breed/${selectedItem}/`)
      ).then((data) => {
        if (data.status !== successStatus) {
          throw Error(errorMessage.statusError);
        }
        return data.message;
      });
      const breedImageArray = Object.values(responseData).filter(
        (value) => value.length > initialStateValue
      );
      getImageList(breedImageArray);
    } catch (error) {
      console.error(error);
    }
  };

  // onClick of Dropdown Header
  const onClickDropdownHeader = async () => {
    setOpen((prevOpen) => !prevOpen);
    try {
      const responseData = await getApiCall(breedList).then((data) => {
        if (data.status !== successStatus) {
          throw Error(errorMessage.statusError);
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
    </div>
  );
}

export default DropDown;
