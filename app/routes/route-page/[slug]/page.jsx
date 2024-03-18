import Image from "next/image";
import { boulderRoutes, ropeRoutes } from "@/app/lib/placeholder-data";
import Comments from "@/app/ui/routes/route-page/comments";

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
      <Comments route={foundRoute} />
    </>
  );
}
