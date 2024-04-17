"use client";
import {
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  UserCircleIcon,
  Bars3Icon,
  TrophyIcon,
  CubeTransparentIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import { currentUser } from "../lib/placeholder-data";

//if current user is not signed in, let profile link redirect to login
let currentUserHref;
try {
  currentUserHref = currentUser.href;
} catch (e) {
  currentUserHref = "/login";
}

//nav links
const links = [
  {
    name: "Routes",
    href: "/routes",
    icon: CubeTransparentIcon,
  },
  {
    name: "Events",
    href: "/events",
    icon: TrophyIcon,
  },
  {
    name: "Archive",
    href: "/archive",
    icon: ArchiveBoxIcon,
  },
  {
    name: "Profile",
    href: currentUserHref,
    icon: UserCircleIcon,
  },
];
if (currentUser) {
  if (currentUser.admin === true) {
    links.splice(3, 0, {
      name: "Edit Routes",
      href: "/edit",
      icon: PencilIcon,
    });
  }
}
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className=" fixed inset-x-0 top-0  h-14 overflow-hidden  bg-bg1 ">
      <ul className="ml-3 mr-3 flex h-full items-center justify-between">
        <button onClick={toggleMenu}>
          <Bars3Icon className="uh-[48px] w-[48px] self-center stroke-iconbg p-[8px]" />
        </button>
        {isMenuOpen && (
          <div className="fixed inset-0 top-14 z-10 bg-black opacity-50 backdrop-blur-md"></div>
        )}
        <div
          ref={menuRef}
          className={clsx(
            "fixed inset-y-0 left-0 z-20 mt-14 w-4/5 bg-bg0 transition-transform duration-300 ease-in-out",
            {
              "translate-x-0 ": isMenuOpen,
              "-translate-x-full ": !isMenuOpen,
            },
          )}
        >
          <ul className="flex h-full flex-col items-start justify-between">
            {links.slice(0, 4).map((link) => {
              const LinkIcon = link.icon;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="my-2 w-full rounded-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="mx-2 flex items-center rounded-lg bg-bg1">
                    <LinkIcon className="h-[55px] w-[55px] self-center stroke-iconbg p-[8px]" />
                    <p className="font-bold text-white">{link.name}</p>
                  </div>
                </Link>
              );
            })}

            <Link
              key={"profile"}
              href={currentUserHref}
              className="mt-auto w-full rounded-full"
            >
              <div className="mx-2 mb-2 flex items-center rounded-lg bg-bg1">
                <UserCircleIcon className="h-[55px] w-[55px] self-center stroke-iconbg p-[8px]" />
                <p className="font-bold text-white">Profile</p>
              </div>
            </Link>
          </ul>
        </div>

        <Link key="logo" href={"/"}>
          <Image
            className="mt-1"
            src={"/img/OTR_Logo.avif"}
            width={110}
            height={110}
            alt="picture of otr logo"
          />
        </Link>
        <Link key="search" href="/search">
          <MagnifyingGlassIcon className="h-[48px] w-[48px] self-center stroke-iconbg p-[8px]" />
        </Link>
      </ul>
    </nav>
  );
}
