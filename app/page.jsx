import IndexHeader from "./ui/index-header";
import RouteTiles from "./ui/route-tile";
import NewRoutes from "./ui/routes/new-route-tile";
import Link from "next/link";
import { currentUser } from "./lib/placeholder-data";
import ProfileHeader from "./ui/profile-header";

export default function Home() {
  return (
    <main className="h-screen w-full">
      {currentUser ? <ProfileHeader /> : <IndexHeader />}

      <div className="flex flex-col">
        <h2 className="ml-5 text-3xl font-bold text-white">
          New Routes &amp; Boulders
        </h2>
        <div className=" scrollbar-hide m-5 mb-2 flex h-80 flex-col justify-start overflow-y-scroll rounded-3xl bg-bg1 bg-opacity-100 p-3 shadow-lg">
          <NewRoutes int={4} />
        </div>
        <Link
          href="/routes"
          className="mb-10 ml-5 text-lg font-normal text-white underline"
        >
          See All
        </Link>
      </div>
      <div className="flex flex-col">
        <h2 className="ml-5 text-3xl font-bold text-white">Current Events</h2>
        <div className="m-5 flex flex-col justify-center overflow-y-hidden rounded-3xl bg-bg1 p-3 shadow-lg  last:mb-20">
          <RouteTiles routeType="event" />
        </div>
      </div>
    </main>
  );
}
