"use client";

import TopDown from "../ui/routes/topdown";
import { useState } from "react";
import DefaultPage from "../ui/routes/default-load";

import SelectedWallLoad from "../ui/routes/selected-wall-load";

export default function Routes() {
  const [activeWall, setActiveWall] = useState(null);
  const [grandchildData, setGrandchildData] = useState(null);

  const handleData = (data) => {
    setActiveWall(data);
  };
  return (
    <main className=" w-full">
      <div className="m-5 mt-2 flex flex-col justify-center overflow-y-hidden rounded-3xl bg-bg1 p-3 shadow-lg">
        <TopDown onData={handleData} />
        <p className="animate-flash-slow self-center text-center text-sm font-semibold text-white">
          Tap anywhere on the map to show routes on that wall!
        </p>
      </div>
      {activeWall === null && <DefaultPage />}
      {activeWall === "main1" && <SelectedWallLoad wall={"main1"} />}
      {activeWall === "AB" && <SelectedWallLoad wall={"AB"} />}
      {activeWall === "main2" && <SelectedWallLoad wall={"main2"} />}
      {activeWall === "boulder1" && <SelectedWallLoad wall={"boulder1"} />}
      {activeWall === "boulder2" && <SelectedWallLoad wall={"boulder2"} />}
      <div className="m-10 opacity-0">footer</div>
    </main>
  );
}
