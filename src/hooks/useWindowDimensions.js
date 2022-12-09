import { useEffect, useState } from "react";
import { BREAKPOINTS, PARAMS } from "../utils/constants/windowResize";

const getWindowDimensions = () => {
  const { innerWidth: width } = window;
  return {
    width,
  };
};

const useWindowDimensions = () => {
  const [windowMoviesConfig, setWindowMoviesConfig] = useState(PARAMS.desktop);

  const handleResize = () => {
    const { width } = getWindowDimensions();
    if (width >= BREAKPOINTS.desktop) {
      setWindowMoviesConfig(PARAMS.desktop);
      return;
    }
    if (width > BREAKPOINTS.phone && width < BREAKPOINTS.desktop) {
      setWindowMoviesConfig(PARAMS.tablet);
      return;
    }
    setWindowMoviesConfig(PARAMS.phone);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowMoviesConfig };
};

export default useWindowDimensions;
