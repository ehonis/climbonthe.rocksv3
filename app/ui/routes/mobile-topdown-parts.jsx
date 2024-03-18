"use client";

import { randomColor } from "@/app/lib/utils";
import { useState, useRef, useEffect } from "react";
function useHoverState(initialColor = "#FFFFFF") {
  const [fillColor, setFillColor] = useState(initialColor);

  const handleHover = () => {
    setFillColor(randomColor());
  };

  const handleMouseLeave = () => {
    setFillColor("#FFFFFF"); // Revert back to white
  };

  return [fillColor, handleHover, handleMouseLeave];
}
function useClickState(initialColor = "#FFFFFF") {
  const [fillColor, setFillColor] = useState(initialColor);
  const ref = useRef(null);

  const handleClick = () => {
    setFillColor(randomColor());
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setFillColor(initialColor); // Reset the color when clicking outside
    }
  };

  useEffect(() => {
    // Add the listener for mousedown when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures this runs once on mount and unmount

  return [fillColor, handleClick, ref];
}
function MainWall1({ onClick }) {
  const [fillColor, handleClick, ref] = useClickState("#FFFFFF");

  return (
    <g
      className="cursor-pointer"
      fill={fillColor}
      onClick={(e) => {
        handleClick(e);
        onClick("main1");
      }}
      ref={ref}
    >
      <rect
        id="mainwall1"
        width="10.0286111"
        height="22.150414"
        x="129.67314"
        y="279.68167"
      />
      <rect
        id="mainwall1.1"
        width="10.0286111"
        height="18.150414"
        x="-82.896011"
        y="286.17474"
        transform="rotate(-40)"
      />
      <rect
        id="mainwall1.2"
        width="10.0286111"
        height="18.150414"
        x="71.244453"
        y="270.97891"
        transform="rotate(-10)"
      />
      <rect
        id="mainwall1.3"
        width="10.0286111"
        height="19.150414"
        x="-184.9083"
        y="202.74956"
        transform="rotate(-65)"
      />
      <rect
        id="mainwall1.4"
        width="10.0940994"
        height="30.804611"
        x="-287.1817"
        y="-81.981021"
        transform="matrix(-0.5700629,-0.82160105,0.94636629,-0.32309573,0,0)"
      />
      <rect
        id="mainwall1.5"
        width="10.0286111"
        height="49.964146"
        x="80.42158"
        y="254.11948"
      />
    </g>
  );
}
function ABWall({ onClick }) {
  const [fillColor, handleClick, ref] = useClickState("#FFFFFF");

  return (
    <g
      className="cursor-pointer"
      fill={fillColor}
      onClick={(e) => {
        handleClick(e);
        onClick("AB");
      }}
      ref={ref}
    >
      <rect
        id="AB-1"
        width="10.5286111"
        height="49.551445"
        x="28.550168"
        y="253.75826"
      />
      <rect
        id="AB-2"
        width="10.97174382"
        height="14.646889"
        x="-137.73346"
        y="241.1954"
        transform="matrix(0.91670591,-0.39956261,0.60747614,0.79433792,0,0)"
      />
      <rect
        id="AB-3"
        width="10.0286111"
        height="30.990782"
        x="20.334927"
        y="215.87732"
      />
      <rect
        id="AB-4"
        width="10.0286111"
        height="32.773054"
        x="20.347147"
        y="185.33461"
      />
    </g>
  );
}
function MainWall2({ onClick }) {
  const [fillColor, handleClick, ref] = useClickState("#FFFFFF");
  return (
    <g
      className="cursor-pointer"
      fill={fillColor}
      onClick={(e) => {
        handleClick(e);
        onClick("main2");
      }}
      ref={ref}
    >
      <rect
        id="AB-0"
        width="10.0286111"
        height="20.550414"
        x="-119.46487"
        y="131.83966"
        transform="rotate(-45)"
      />
      <rect
        id="main0"
        width="10.0286111"
        height="16.150414"
        x="-105.66956"
        y="132.46523"
        transform="rotate(-45)"
      />
      <rect
        id="main1"
        width="10.0286111"
        height="41.529915"
        x="-179.68067"
        y="29.96077"
        transform="rotate(-90)"
      />
      <rect
        id="main2"
        width="10.0286111"
        height="24.450414"
        x="-94.332166"
        y="163.61043"
        transform="rotate(-50)"
      />
      <rect
        id="main3"
        width="10.0286111"
        height="14.150414"
        x="79.922047"
        y="185.68465"
      />
      <rect
        id="main4"
        width="10.0286111"
        height="25.626314"
        x="-201.29778"
        y="80.000912"
        transform="rotate(-90)"
      />
      <rect
        id="main5"
        width="10.0286111"
        height="29.795843"
        x="-181.1843"
        y="106.23439"
        transform="rotate(-90)"
      />
      <rect
        id="main6"
        width="10.0157199"
        height="29.28586"
        x="156.3375"
        y="146.72034"
        transform="matrix(0.97818502,0.20773555,-0.32026895,0.94732666,0,0)"
      />
      <rect
        id="main7"
        width="10.0286111"
        height="20.01745"
        x="-215.25677"
        y="-70.06575"
        transform="rotate(-145)"
      />
    </g>
  );
}
function Boulder1({ onClick }) {
  const [fillColor, handleClick, ref] = useClickState("#FFFFFF");
  return (
    <g
      className="cursor-pointer"
      fill={fillColor}
      onClick={(e) => {
        handleClick(e);
        onClick("boulder1");
      }}
      ref={ref}
    >
      <rect
        id="RightofSlabWall"
        width="10.0286111"
        height="10.630193"
        x="59.813866"
        y="243.29147"
        transform="rotate(-35)"
      />

      <rect
        id="slab"
        width="10.0286111"
        height="50.094456"
        x="-166.70238"
        y="142.97017"
        transform="rotate(-90)"
      />
      <rect
        id="cave"
        width="10.0286111"
        height="36.054012"
        x="-204.5097"
        y="-208.62723"
        transform="scale(-1)"
      />
      <rect
        id="sideofcave"
        width="10.0286111"
        height="8.6745148"
        x="-173.27579"
        y="195.73088"
        transform="rotate(-90)"
      />
      <rect
        id="vert1"
        width="10.0286111"
        height="43.094456"
        x="-209.01407"
        y="161.36197"
        transform="rotate(-90)"
      />
      <rect
        id="vert2"
        width="10.0286111"
        height="35.384483"
        x="-162.40517"
        y="-234.32622"
        transform="scale(-1)"
      />
    </g>
  );
}
function Boulder2({ onClick }) {
  const [fillColor2, handleClick, ref] = useClickState("#FFFFFF");
  return (
    <g
      className="cursor-pointer"
      fill={fillColor2}
      onClick={(e) => {
        handleClick(e);
        onClick("boulder2");
      }}
      ref={ref}
    >
      <rect
        id="rect6-7-5-5-0"
        width="10.0286111"
        height="21.581991"
        x="-247.58009"
        y="140.35162"
        transform="rotate(-95)"
      />
      <rect
        id="rect6-7-5-5-5"
        width="10.008342"
        height="18.410487"
        x="-264.50404"
        y="-202.88083"
        transform="matrix(-0.98534219,-0.17058945,0.38307127,-0.92371879,0,0)"
      />
      <rect
        id="rect6-7-5-5-7"
        width="10.0286111"
        height="24.452906"
        x="-222.95386"
        y="180.27415"
        transform="rotate(-90)"
      />
      <rect
        id="rect6-7-5-5-06"
        width="10.0286111"
        height="44.2335"
        x="-177.80927"
        y="-296.71094"
        transform="scale(-1)"
      />
      <rect
        id="rect6-7-5-5-4"
        width="10.0286111"
        height="28.818001"
        x="-262.54037"
        y="176.73061"
        transform="rotate(-90)"
      />
      <rect
        id="rect6-7-5-5-4-8"
        width="10.0286111"
        height="28.818001"
        x="-296.65774"
        y="176.67265"
        transform="rotate(-90)"
      />
    </g>
  );
}

export default function MobileTopdownParts({ onData }) {
  return (
    <>
      <MainWall1 onClick={onData} />
      <ABWall onClick={onData} />
      <MainWall2 onClick={onData} />
      <Boulder1 onClick={onData} />
      <Boulder2 onClick={onData} />
    </>
  );
}
