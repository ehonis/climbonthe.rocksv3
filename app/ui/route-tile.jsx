"use client";
import { ropeRoutes, boulderRoutes, events } from "../lib/placeholder-data";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import prisma from "../lib/prisma";
import { useEffect, useState } from "react";

export default function RouteTiles({ routeType }) {
  const [ropess, setRopes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("api/get-route");
        const data = await res.json();

        setRopes(data.ropes);
      } catch (error) {
        console.error(error);
      }
    };

    if (routeType === "rope") {
      fetchData();
    }
  }, [routeType]);
  console.log("ropes:", ropess);
  if (routeType === "rope") {
    const ropes = ropeRoutes;
    return (
      <>
        {ropess.map((route) => {
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
                    blurDataURL="data:..."
                    placeholder="blur"
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
  } else if (routeType === "boulder") {
    return (
      <>
        {boulderRoutes.map((route) => {
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
                    blurDataURL="data:..."
                    placeholder="blur"
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
                    width={100}
                    height={100}
                    className="ml-4 h-12 w-12 self-center justify-self-start"
                    blurDataURL="data:..."
                    placeholder="blur"
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
