import { getNewRoutes } from "../../lib/utils";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

export default function NewRoutes({ int }) {
  const newRoutes = getNewRoutes(int);

  return (
    <>
      {newRoutes.map((route) => {
        return (
          <Link key={route.id} href={route.href} className="mb-4 last:mb-0">
            <div
              className={clsx(
                "flex h-20 w-full rounded-full ",
                { "gradient-background-blue": route.color === "Blue" },
                { "gradient-background-red": route.color === "Red" },
                { "gradient-background-black": route.color === "Black" },
                { "gradient-background-green": route.color === "Green" },
                { "gradient-background-yellow": route.color === "Yellow" },
                { "gradient-background-purple": route.color === "Purple" },
                { "gradient-background-pink": route.color === "Pink" },
                { "gradient-background-orange": route.color === "Orange" },
                { "gradient-background-white": route.color === "White" },
                { "gradient-background-gray": route.color === "Gray" },
              )}
            >
              <div className="m-1 flex w-full justify-between overflow-hidden rounded-full bg-bg2">
                <Image
                  src={route.image}
                  alt="image"
                  width={100}
                  height={100}
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
        );
      })}
    </>
  );
}
