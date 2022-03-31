import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({ primary, disabled }) {
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    [styles.disabled]: disabled,
  });

  const wrapperClasses = clsx({ "d-flex": true });

  return (
    <div className={wrapperClasses}>
      <button className={classes}>Click me!</button>
      <div>click him</div>
      {/* <button
        className={clsx(styles.btn, {
          [styles.active]: false,
        })}
      >
        Click me 2!
      </button> */}
    </div>
  );
}

export default Button;
