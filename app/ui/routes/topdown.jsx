"use client";
import { randomColor } from "@/app/lib/utils";
import TopdownParts from "./TopdownParts";
import { useState } from "react";

export default function TopDown() {
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
          <TopdownParts />
        </g>
      </svg>
    </>
  );
}
