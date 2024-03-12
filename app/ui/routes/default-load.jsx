import RouteTiles from "@/app/ui/route-tile";

import CircleButtons from "@/app/ui/routes/circleButtons";

export default function DefaultPage() {
  return (
    <>
      <div className="m-5 flex items-center justify-between">
        <div>
          <h2 className="inline text-3xl font-bold text-white">Ropes</h2>
        </div>
        <CircleButtons />
      </div>
      <div
        className="m-5 flex flex-col justify-center overflow-y-hidden rounded-3xl bg-bg1 p-3 shadow-lg"
        id="ropeDivContainer"
      >
        <RouteTiles routeType="rope" />
      </div>
      <div className="m-5 flex items-center justify-between">
        <div>
          <h2 className="inline text-3xl font-bold text-white">Boulders</h2>
        </div>
        <CircleButtons />
      </div>
      <div
        className="m-5 flex flex-col justify-center overflow-y-hidden rounded-3xl bg-bg1 p-3 shadow-lg"
        id="boulderDivContainer"
      >
        <RouteTiles routeType="boulder" />
      </div>
    </>
  );
}
