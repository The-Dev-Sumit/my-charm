"use client";

import { useState, useEffect } from "react";

const mobileView = 768;

export const useMobileHook = (breakpoint = mobileView) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkWidth();

    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [breakpoint]);

  return isMobile;
};
