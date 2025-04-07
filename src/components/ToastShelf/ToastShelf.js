import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

//{id, variant, content, handleDismiss}
function ToastShelf({ items, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {items.map(({ id, variant, content }) => (
        <Toast
          key={id}
          variant={variant}
          content={content}
          handleDismiss={() => handleDismiss(id)}
        />
      ))}
    </ol>
  );
}

export default ToastShelf;
