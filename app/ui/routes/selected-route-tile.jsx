import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { getWallRoutes } from "@/app/lib/utils";

export default function SelectedWallTile({ wallName }) {
  const selectedWalls = getWallRoutes(wallName);

  return (
    <>
      {selectedWalls.map((route) => {
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
}
