import React from "react";

import Button from "../Button";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";
import { VARIANT_OPTIONS } from "../constants";
import ToastShelf from "../ToastShelf/ToastShelf";

const DEFAULT_VARIANT = "notice";

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(DEFAULT_VARIANT);
  const { toastrs, addToastr, dismissToastr } = React.useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();

    addToastr(variant, message);

    //cleanup the form
    setMessage("");
    setVariant(DEFAULT_VARIANT);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf items={toastrs} handleDismiss={dismissToastr} />

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                required
                className={styles.messageInput}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => {
                const id = `variant-${option}`;

                return (
                  <label htmlFor={id} key={id}>
                    <input
                      id={id}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={variant === option}
                      onChange={(event) => {
                        setVariant(event.target.value);
                      }}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
