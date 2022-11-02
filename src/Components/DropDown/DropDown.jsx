import React, { useState } from "react";
import { getApiCall } from "../../services/apiServices";
import { breedNameListAPI, title } from "../../utils/constants";
import styles from "./DropDown.module.css";

function DropDown() {
  const [DropdownTitle, setDropdownTitle] = useState(
    title.defaultDropdownTitle
  );
  const [DropDownList, setDropDownList] = useState([]);
  const [open, setOpen] = useState(false);
  const onClickSelectedItemClicked = (selectedItem) => {
    setDropdownTitle(selectedItem);
    setOpen((prevOpen) => !prevOpen);
  };
  const onClickDropdownHeader = async () => {
    setOpen((prevOpen) => !prevOpen);
    try {
      const responseData = await getApiCall(breedNameListAPI).then((data) => {
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
    </div>
  );
}

export default DropDown;
