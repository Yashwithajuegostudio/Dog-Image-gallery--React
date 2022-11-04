import React from "react";
import styles from "./Button.module.css";

function Button({ clickHandler, title, style, disabled, id }) {
  return (
    <button
      className={styles.btn}
      id={id}
      style={style}
      onClick={clickHandler}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
