"use client";
import {
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { currentUser } from "../lib/placeholder-data";
import { usePathname } from "next/navigation";
import clsx from "clsx";
let currentUserHref;

try {
  currentUserHref = currentUser.href;
} catch (e) {
  currentUserHref = "/login";
}

const links = [
  {
    name: "home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "route",
    href: "/routes",
    icon: BoltIcon,
  },
  {
    name: "search",
    href: "/search",
    icon: MagnifyingGlassIcon,
  },

  {
    name: "profile",
    href: currentUserHref,
    icon: UserCircleIcon,
  },
];
if (currentUser) {
  if (currentUser.admin === true) {
    links.splice(3, 0, {
      name: "edit route",
      href: "/edit",
      icon: PencilIcon,
    });
  }
}
export default function NavLinks() {
  {
    const pathname = usePathname();

    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(" self-center rounded-full", {
                "bg-bg2": pathname === link.href,
              })}
            >
              <LinkIcon
                className={clsx(
                  "h-[50px] w-[50px] self-center stroke-iconbg p-[6px]",
                  {
                    "stroke-white": pathname === link.href,
                  },
                )}
              />
            </Link>
          );
        })}
      </>
    );
  }
}
