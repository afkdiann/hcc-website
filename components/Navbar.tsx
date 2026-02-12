"use client";

import { House, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavbarProps {
  isOpen: boolean;
  onOpen: () => void;
}

function Navbar({ isOpen, onOpen }: NavbarProps) {
  const router = useRouter();

  return (
    <nav
      className={`bg-red-800 relative ${isOpen ? "hidden md:block" : ""}`}
    >
      <div className="text-white flex justify-between pl-32">
        <ul className="font-extrabold p-4 space-x-4 hidden md:flex text-md">
          <button
            className="hover:bg-red-700 p-4"
            onClick={() => router.push("/")}
            aria-label="Open navbar on smaller screens"
          >
            <House />
          </button>
          <Link
            className="hover:bg-red-700 p-4"
            aria-label="Go to about page"
            href="/about"
          >
            ABOUT
          </Link>
          <Link
            className="hover:bg-red-700 p-4"
            aria-label="Go to people page"
            href="/people"
          >
            PEOPLE
          </Link>
          <Link
            className="hover:bg-red-700 p-4"
            aria-label="Go to events page"
            href="/events"
          >
            EVENTS
          </Link>
          <Link
            className="hover:bg-red-700 p-4"
            aria-label="Go to news page"
            href="/news"
          >
            NEWS
          </Link>
          <Link
            className="hover:bg-red-700 p-4"
            aria-label="Go to research page"
            href="/research"
          >
            RESEARCH
          </Link>
          <Link
            className="hover:bg-red-700 p-4"
            aria-label="Go to opportunities page"
            href="/opportunities"
          >
            OPPORTUNITIES
          </Link>
        </ul>
        <button
          className="flex ml-auto py-8 pr-4 my-auto md:hidden"
          onClick={onOpen}
          aria-label="Open navbar on smaller screens"
        >
          <Menu />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
