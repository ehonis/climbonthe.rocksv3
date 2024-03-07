import IndexHeader from "./ui/index-header";
import RouteTiles from "./ui/route-tile";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="m-5 flex flex-col flex-wrap justify-center overflow-hidden rounded-3xl bg-bg1 p-5 shadow-lg">
        <IndexHeader />
      </div>
      <div className="flex flex-col">
        <h2 className="ml-5 text-3xl font-bold text-white">
          New Routes &amp; Boulders
        </h2>
        <div className="m-5 flex flex-col justify-center overflow-y-hidden rounded-3xl bg-bg1 p-3 shadow-lg">
          <RouteTiles routeType="rope" />
          <RouteTiles routeType="boulder" />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="ml-5 text-3xl font-bold text-white">Current Events</h2>
        <div className="m-5 flex flex-col justify-center overflow-y-hidden rounded-3xl bg-bg1 p-3 shadow-lg last:mb-20">
          <RouteTiles routeType="event" />
        </div>
      </div>
    </main>
  );
}
