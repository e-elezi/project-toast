import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastrs, setToastrs] = React.useState([]);

  function addToastr(variant, message) {
    const newToastr = { id: Math.random(), variant, content: message };
    setToastrs([...toastrs, newToastr]);
  }

  function dismissToastr(id) {
    const filteredToastrs = toastrs.filter((item) => item.id !== id);
    setToastrs(filteredToastrs);
  }

  useEscapeKey(() => {
    setToastrs([]);
  });

  return (
    <ToastContext.Provider value={{ toastrs, addToastr, dismissToastr }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
