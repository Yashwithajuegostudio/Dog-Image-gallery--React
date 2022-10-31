import React from "react";
import styles from "./DropDown.module.css";

function DropDown() {
  return (
    <div className={styles.drop_down_container}>
      <div className={styles.select_wrapper}>
        <div className={styles.select_custom}>
          <div className={styles.select_custom_trigger}>
            Please select a Breed ...
          </div>
          <div className={styles.select_custom_options} id="selectList"></div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
