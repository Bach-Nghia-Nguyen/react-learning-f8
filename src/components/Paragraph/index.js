import React from "react";
import styles from "./Paragraph.module.css";

console.log("Paragraph styles", styles);

function Paragraph() {
  return (
    <div className={styles.paragraph}>
      Waiting for update signal from WDS...
    </div>
  );
}

export default Paragraph;
