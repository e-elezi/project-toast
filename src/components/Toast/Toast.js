import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
import { ToastContext } from "../ToastProvider";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { VARIANT_OPTIONS } from "../constants";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, content }) {
  const { dismissToastr } = React.useContext(ToastContext);

  if (!VARIANT_OPTIONS.includes(variant)) {
    throw Error(`The only possible variants are ${VARIANT_OPTIONS}`);
  }

  const IconTag = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <p className={styles.content}>{content}</p>
      <VisuallyHidden>{variant} - </VisuallyHidden>
      <button
        className={styles.closeButton}
        onClick={() => dismissToastr(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
