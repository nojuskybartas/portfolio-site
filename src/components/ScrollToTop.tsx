import React, { useEffect, useRef } from "react";

export function ScrollToTop() {
  const topRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (topRef && topRef.current) {
      topRef.current.scrollIntoView({
        behavior: "smooth",
      });
      console.log("top");
    }
  }, [topRef]);

  return <div ref={topRef} className="absolute top-0" />;
}
