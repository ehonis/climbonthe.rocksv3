"use client";
import RouteTiles from "../ui/route-tile";
import IndexHeader from "../ui/index-header";
import TopDown from "../ui/routes/topdown";
import CircleButtons from "../ui/routes/circleButtons";
import { useState } from "react";
import DefaultPage from "../ui/routes/default-load";

export default function Routes() {
  const [activeWall, setActiveWall] = useState(null);
  return (
    <main className="h-screen w-full">
      <div className="m-5 flex flex-col justify-center overflow-y-hidden rounded-3xl bg-bg1 p-3 shadow-lg">
        <TopDown />
        <p className="animate-flash-slow self-center text-sm font-semibold text-white">
          Tap anywhere on the map to show routes on that wall!
        </p>
      </div>
      {activeWall === null && <DefaultPage />}
      {activeWall === "mainWall1" && <DefaultPage />}
      {activeWall === "ABWall" && <DefaultPage />}
      {activeWall === "mainWall2" && <DefaultPage />}
      {activeWall === "boulder1" && <DefaultPage />}
      {activeWall === "boulder2" && <DefaultPage />}
    </main>
  );
}
