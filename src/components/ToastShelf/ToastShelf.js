import React from "react";
import { ToastContext } from "../ToastProvider";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

//{id, variant, content, handleDismiss}
function ToastShelf() {
  const { toastrs } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastrs.map(({ id, variant, content }) => (
        <Toast key={id} id={id} variant={variant} content={content} />
      ))}
    </ol>
  );
}

export default ToastShelf;
