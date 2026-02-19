"use client";

import Link from "next/link";
import { X, ChevronDown, ChevronUp, Star } from "lucide-react";
import { useState } from "react";

interface DropdownMenuProps {
  onClose: () => void;
}

function DropdownMenu({ onClose }: DropdownMenuProps) {
  //  TODO: have only one state variable and check which dropdown is clicked (check Navbar.tsx for reference)
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  return (
    <div className="bg-red-800 text-white md:hidden font-extrabold text-md">
      <div className="flex justify-end items-center p-4">
        <button
          onClick={onClose}
          aria-label="Close navbar on smaller screens"
          className="mt-4"
        >
          <X />
        </button>
      </div>
      <ul className="flex flex-col">
        <Link
          className="hover:bg-red-700 p-4"
          aria-label="Go to home page"
          href="/"
        >
          HOME
        </Link>
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
        <div className="flex justify-between items-center hover:bg-red-700">
          <Link
            className="p-4 w-7/8"
            aria-label="Go to news page"
            href="/news"
          >
            NEWS
          </Link>
          <div className={`w-1/8 flex justify-center p-4 text-center ${isNewsOpen ? "bg-red-900" : "hover:bg-red-900"}`}>
            {isNewsOpen ? (
              <ChevronUp
                onClick={() => setIsNewsOpen(false)}
                aria-label="Collapse news dropdown"
              />
            ) : (
              <ChevronDown
                onClick={() => setIsNewsOpen(true)}
                aria-label="Expand news dropdown"
              />
            )}
          </div>
        </div>
          {isNewsOpen && (
            <div className="bg-red-900 flex flex-col">
              <Link
                aria-label="Go to current news page"
                href="/news"
              >
                <div className="flex items-center py-4 px-8 hover:bg-black">
                  <Star className="mr-4 w-4 h-4" /> Current
                </div>
              </Link>
              <Link
                aria-label="Go to archived news page"
                href="/news"
              >
                <div className="flex items-center py-4 px-8 hover:bg-black">
                  <Star className="mr-4 w-4 h-4" />
                  Archived
                </div>
              </Link>
            </div>
          )}
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
    </div>
  );
}

export default DropdownMenu;
