import React from "react";
import styles from "./CustomDropDown.module.css";

function CustomDropDown({
  dropDownList,
  onChange,
  defaultValue,
  clickHandler,
}) {
  return (
    <select
      className={styles.select}
      onChange={onChange}
      defaultValue={defaultValue}
      onClick={clickHandler}
    >
      <option>{defaultValue}</option>
      {dropDownList.map((selectedItem, index) => {
        return <option key={index}>{selectedItem}</option>;
      })}
    </select>
  );
}

export default CustomDropDown;
