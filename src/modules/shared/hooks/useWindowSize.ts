/** LIBRARIES */
import { useState, useEffect, useCallback } from "react";

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const windowResizeHandler = useCallback(
    () => setWindowWidth(window.innerWidth),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);

    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, [windowResizeHandler]);

  return {
    windowWidth,
  };
};

export default useWindowSize;
