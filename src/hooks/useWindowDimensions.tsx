import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  const isMobile = width <= 768
  return {
    width,
    height,
    isMobile
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<any>({});

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}