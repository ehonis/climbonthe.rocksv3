import { getWallRoutes } from "@/app/lib/utils";
import SelectedWallTile from "./selected-route-tile";

export default function SelectedWallLoad({ wall }) {
  const walls = getWallRoutes(wall);
  return (
    <>
      <div className="m-5 flex items-center justify-between">
        <h2 className="inline text-3xl font-bold text-white">{wall} Routes</h2>
      </div>
      <div
        className="m-5 flex flex-col justify-center overflow-y-hidden rounded-3xl bg-bg1 p-3 shadow-lg"
        id="ropeDivContainer"
      >
        <SelectedWallTile wallName={wall} />
      </div>
    </>
  );
}
