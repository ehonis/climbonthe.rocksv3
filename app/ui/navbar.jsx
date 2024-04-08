"use client";
import {
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { currentUser } from "../lib/placeholder-data";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const links = [
  {
    name: "home",
    href: "/",
    icon: Bars3Icon,
  },

  {
    name: "search",
    href: "/search",
    icon: MagnifyingGlassIcon,
  },
];
export default function NavBar() {
  return (
    <nav className=" fixed inset-x-0 top-0  h-14 overflow-hidden  bg-bg1 ">
      <ul className="ml-3 mr-3 flex h-full items-center justify-between">
        <button>
          <Bars3Icon className="h-[48px] w-[48px] self-center stroke-iconbg p-[8px]" />
        </button>
        <Link key="logo" href={"/"}>
          <Image
            className="mt-1"
            src={"/img/OTR_Logo.avif"}
            width={110}
            height={110}
            alt="picture of otr logo"
          />
        </Link>
        <Link key={links[1].name} href={links[1].href}>
          <MagnifyingGlassIcon className="h-[48px] w-[48px] self-center stroke-iconbg p-[8px]" />
        </Link>
      </ul>
    </nav>
  );
}
