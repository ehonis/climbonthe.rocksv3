import Image from "next/image";
import { boulderRoutes, ropeRoutes } from "@/app/lib/placeholder-data";
export default function RoutePage({ params, searchParams }) {
  const combinedData = [...ropeRoutes, ...boulderRoutes];
  const foundRoute = combinedData.find(
    (item) => item.href === "/routes/route-page/" + params.slug,
  );
  console.log(foundRoute);

  return (
    <>
      <h1 className="ml-5 mr-5 mt-8 text-center text-2xl font-bold text-white">
        {foundRoute.name}
      </h1>
      <div className="m-5 mb-3 mt-3 flex rounded-xl bg-bg1 p-3 shadow-lg">
        {/* <img src="........" alt="" className="h-36" /> */}
        <Image
          src={foundRoute.image}
          width={600}
          height={1000}
          alt="picture of route"
          className="h-36 w-64"
        />
        <div className="w-{1px} ml-4 h-36 border-l-2 border-iconbg" />
        <div className="ml-4 flex h-32 w-full flex-col">
          <p className="mt-0 pt-0 text-lg font-semibold text-white">
            Type: <span className="text-bluee">{foundRoute.type}</span>
          </p>
          <p className="m-0 p-0 text-lg font-semibold text-white">
            Grade: <span className="gradient-text">{foundRoute.grade}</span>
          </p>
          <p className="m-0 p-0 text-lg font-semibold text-white">
            Color: <span className="text-redd">{foundRoute.color}</span>
          </p>
          <p className="m-0 p-0 text-sm text-gray-400">
            {foundRoute.description}
          </p>
        </div>
      </div>
      <div className="ml-5 mr-5 flex justify-between">
        <div className="mr-3 flex w-full flex-col items-center rounded-xl bg-bg1 p-4 shadow-lg">
          <h2 className="gradient-text-blue m-0 p-0 text-8xl font-bold">12</h2>
          <p className="m-0 p-0 text-lg font-semibold text-white">ascents</p>
        </div>
        <div className="ml-2 flex w-full flex-col items-center rounded-xl bg-bg1 p-4 shadow-lg">
          <h2 className="gradient-text m-0 p-0 text-8xl font-bold">20</h2>
          <p className="m-0 p-0 text-lg font-semibold text-white">
            days <span className="text-iconbg">(old)</span>
          </p>
        </div>
      </div>
      <div className="ml-5 mr-5 mt-3 flex justify-end gap-2">
        <button className="h-full rounded-full bg-yellow-400 p-3 pl-5 pr-5 text-sm text-black">
          Rate
        </button>
        <button className="h-full rounded-full bg-green-500 p-3 text-sm text-white">
          Complete
        </button>
      </div>
      <h1 className="ml-5 mr-5 text-2xl font-bold text-white">Comments</h1>
      <div className="ml-5 mr-5 mt-3 flex flex-col gap-3 rounded-xl bg-bg1 p-3 shadow-lg">
        <div className="flex w-full gap-2 rounded-lg bg-bg2 p-2">
          <div className="flex">
            <img
              src="img/jack_profilePic.png"
              alt="Picture of jack"
              className="h-14 w-28 self-center rounded-full shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-white">@jack</p>
            <p className="text-xs font-medium text-white">
              loved this route, pretty easy beginning, felt like 5.6, but ended
              up pretty hard in the last moves
            </p>
          </div>
        </div>
        <div className="flex w-full gap-2 rounded-lg bg-bg2 p-2">
          <div className="flex">
            <img
              src="img/jack_profilePic.png"
              alt="Picture of jack"
              className="h-14 w-28 self-center rounded-full shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-white">@jack</p>
            <p className="text-xs font-medium text-white">
              loved this route, pretty easy beginning, felt like 5.6, but ended
              up pretty hard in the last moves
            </p>
          </div>
        </div>
        <div className="z-0 flex w-full gap-2 rounded-lg bg-bg2 p-2">
          <div className="flex">
            <img
              src="img/jack_profilePic.png"
              alt="Picture of jack"
              className="h-14 w-28 self-center rounded-full shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-white">@jack</p>
            <p className="text-xs font-medium text-white">
              loved this route, pretty easy beginning, felt like 5.6, but ended
              up pretty hard in the last moves
            </p>
          </div>
        </div>
        <div className="flex h-32 flex-col justify-end">
          website details for scrolling
        </div>
      </div>
    </>
  );
}
