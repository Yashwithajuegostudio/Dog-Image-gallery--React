import React from "react";
import styles from "./Button.module.css";

function Button({ clickHandler, title, style }) {
  return (
    <button className={styles.btn} style={style} onClick={clickHandler}>
      {title}
    </button>
  );
}

export default Button;
