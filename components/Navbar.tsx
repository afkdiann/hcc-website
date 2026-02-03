"use client";

import { House, Menu } from "lucide-react";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-red-900 h-24">
      <div className="text-white flex justify-between">
        <ul className="font-extrabold p-4 space-x-4 hidden md:flex text-md">
          <button
            className="hover:bg-red-700 p-4"
            onClick={() => router.push("/")}
          >
            <House aria-label="Go to home page" />
          </button>
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
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open navbar on smaller screens"
        >
          <Menu />
        </button>
        {isOpen && <DropdownMenu onClose={() => setIsOpen(false)} />}
      </div>
    </nav>
  );
}

export default Navbar;
