import { boulderRoutes, ropeRoutes, events } from "@/app/lib/placeholder-data";
import Image from "next/image";

export default function EditRouteTiles({ type }) {
  if (type === "rope") {
    return (
      <div>
        {ropeRoutes.map((route) => {
          return (
            <div
              key={route.id}
              className="m-3 flex justify-between rounded-xl bg-bg1 p-2 shadow-lg"
            >
              <Image
                src={route.image}
                width={50}
                height={50}
                alt="picture of route"
                className="h-12 w-12 rounded-md pr-1"
              />
              <div className="flex flex-col pl-1 pr-2">
                <p className="self-center text-center text-white">
                  {route.name}
                </p>
                <p className="self-center text-white">
                  <span className="text-bluee">{route.grade}</span>
                </p>
              </div>
              <p className="self-center pr-1 text-white">{route.date}</p>
            </div>
          );
        })}
      </div>
    );
  } else if (type === "boulder") {
    return (
      <>
        {boulderRoutes.map((route) => {
          return (
            <div
              key={route.id}
              className="m-3 flex justify-between rounded-xl bg-bg1 p-2 shadow-lg"
            >
              <Image
                src={route.image}
                width={50}
                height={50}
                alt="picture of route"
                className="h-12 w-12 rounded-md pr-1"
              />
              <div className="flex flex-col pl-1 pr-2">
                <p className="self-center text-center text-white">
                  {route.name}
                </p>
                <p className="self-center text-white">
                  <span className="text-bluee">{route.grade}</span>
                </p>
              </div>
              <p className="self-center pr-1 text-white">{route.date}</p>
            </div>
          );
        })}
      </>
    );
  } else if (type === "event") {
    return (
      <>
        {events.map((route) => {
          return (
            <div
              key={route.id}
              className="m-3 flex justify-between rounded-xl bg-bg1 p-2 shadow-lg"
            >
              <Image
                src={route.image}
                width={500}
                height={500}
                alt="picture of route"
                className="h-12 w-12 self-center rounded-md pr-1"
              />

              <p className="self-center text-white">2024 Ropes League</p>
              <div className="flex flex-col pl-1 pr-2">
                <p className="self-center pr-1 text-white">12/3/23</p>
                <p className="self-center pr-1 text-white">-</p>
                <p className="self-center pr-1 text-white">12/5/23</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
