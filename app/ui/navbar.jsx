"use client";
import NavLinks from "./nav-link";

export default function NavBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 left-0 m-3 h-16 overflow-hidden rounded-full bg-bg1">
      <ul className="flex h-full justify-around">
        <NavLinks />
      </ul>
    </nav>
  );
}
