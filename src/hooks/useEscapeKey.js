import React from "react";

function useEscapeKey(handleEscapeKey) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        handleEscapeKey();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleEscapeKey]);
}

export default useEscapeKey;
