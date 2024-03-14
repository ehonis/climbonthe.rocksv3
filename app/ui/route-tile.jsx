import { ropeRoutes, boulderRoutes, events } from "../lib/placeholder-data";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

export default function RouteTiles({ routeType }) {
  if (routeType === "rope") {
    return (
      <>
        {ropeRoutes.map((route) => {
          return (
            <>
              <Link key={route.id} href={route.href} className="mb-4 last:mb-0">
                <div
                  className={clsx(
                    "flex h-20 w-full rounded-full ",
                    { "gradient-background-blue": route.color === "blue" },
                    { "gradient-background-red": route.color === "red" },
                    { "gradient-background-black": route.color === "black" },
                    { "gradient-background-green": route.color === "green" },
                    { "gradient-background-yellow": route.color === "yellow" },
                    { "gradient-background-purple": route.color === "purple" },
                    { "gradient-background-pink": route.color === "pink" },
                    { "gradient-background-orange": route.color === "orange" },
                    { "gradient-background-white": route.color === "white" },
                    { "gradient-background-gray": route.color === "gray" },
                  )}
                >
                  <div className="m-1 flex w-full justify-between overflow-hidden rounded-full bg-bg2">
                    <Image
                      src={route.image}
                      alt="image"
                      width={800}
                      height={1000}
                      className="m-1 w-12 rounded-l-full"
                    />

                    <p className="self-center text-center text-2xl font-semibold text-white">
                      {route.name}
                    </p>
                    <p className="mr-3 self-center font-semibold text-white">
                      {route.grade}
                    </p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </>
    );
  } else if (routeType === "boulder") {
    return (
      <>
        {boulderRoutes.map((route) => {
          return (
            <>
              <Link key={route.id} href={route.href} className="mb-4 last:mb-0">
                <div
                  className={clsx(
                    "flex h-20 w-full rounded-full ",
                    { "gradient-background-blue": route.color === "blue" },
                    { "gradient-background-red": route.color === "red" },
                    { "gradient-background-black": route.color === "black" },
                    { "gradient-background-green": route.color === "green" },
                    { "gradient-background-yellow": route.color === "yellow" },
                    { "gradient-background-purple": route.color === "purple" },
                    { "gradient-background-pink": route.color === "pink" },
                    { "gradient-background-orange": route.color === "orange" },
                    { "gradient-background-white": route.color === "white" },
                    { "gradient-background-gray": route.color === "gray" },
                  )}
                >
                  <div className="m-1 flex w-full justify-between overflow-hidden rounded-full bg-bg2">
                    <Image
                      src={route.image}
                      alt="image"
                      width={800}
                      height={1000}
                      className="m-1 w-12 rounded-l-full"
                    />

                    <p className="self-center text-center text-2xl font-semibold text-white">
                      {route.name}
                    </p>
                    <p className="mr-3 self-center font-semibold text-white">
                      {route.grade}
                    </p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </>
    );
  } else if (routeType === "event") {
    return (
      <>
        {events.map((event) => {
          return (
            <Link href={event.href} key={event.id}>
              <div className="gradient-background-comp mb-4 flex h-20 w-full rounded-full last:mb-0">
                <div className="m-1 flex w-full justify-between overflow-hidden rounded-full bg-bg2">
                  <Image
                    src={event.image}
                    alt="image"
                    width={512}
                    height={512}
                    className="ml-4 h-12 w-12 self-center justify-self-start"
                  />

                  <p className="mr-4 self-center text-center text-2xl font-semibold text-white">
                    {event.name}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </>
    );
  }
}
