import React from "react";

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

  React.useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        setToastrs([]);
      }
    }
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toastrs, addToastr, dismissToastr }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
