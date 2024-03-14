"use client";
import NavLinks from "./nav-link";

export default function NavBar() {
  return (
    <nav className="outline-3 fixed inset-x-0 bottom-0 left-0 m-3 h-16 overflow-hidden rounded-full bg-bg1 outline outline-iconbg">
      <ul className="flex h-full justify-around">
        <NavLinks />
      </ul>
    </nav>
  );
}
