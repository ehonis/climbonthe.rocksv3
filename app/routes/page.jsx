import RouteTiles from "../ui/route-tile";
import IndexHeader from "../ui/index-header";
import TopDown from "../ui/routes/topdown";
import CircleButtons from "../ui/routes/circleButtons";

export default function Routes() {
  return (
    <main className="h-screen w-full">
      <div className="m-5 flex flex-col justify-center overflow-y-hidden rounded-3xl bg-bg1 p-3 shadow-lg">
        <TopDown />
        <p className="self-center text-sm font-semibold">
          Tap anywhere on the map to show routes on that wall!
        </p>
      </div>
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
    </main>
  );
}
