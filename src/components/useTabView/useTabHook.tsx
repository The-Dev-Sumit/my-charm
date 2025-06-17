"use client";

import React, { useState, useEffect } from "react";

const mobileView = 678;

export const useTabletHook = (breakpoint = mobileView) => {
  const [isTab, setIsTab] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
        const width = (window.innerWidth);
        setIsTab(width >= breakpoint && width <= 1024);
    };

    checkWidth();

    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [breakpoint]);

  return isTab;
};
