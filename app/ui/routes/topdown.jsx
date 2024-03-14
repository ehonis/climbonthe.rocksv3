"use client";

import DesktopTopdownParts from "./desktop-topdown-parts";

import { useState, useEffect } from "react";
import MobileTopdownParts from "./mobile-topdown-parts";

export default function TopDown({ onData }) {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("small");
      } else if (width >= 768) {
        setScreenSize("medium");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <svg
        viewBox="0 0 196.16191 133.63594"
        version="1.1"
        id="svg1"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-5 my-3 mb-4"
      >
        <defs id="defs1" />
        <g id="layer2" transform="translate(-9.3866979,-163.67377)">
          {screenSize === "small" && <MobileTopdownParts onData={onData} />}
          {screenSize === "medium" && <DesktopTopdownParts />}
        </g>
      </svg>
    </>
  );
}
