"use client";

import { House, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface NavbarProps {
  isOpen: boolean;
  onOpen: () => void;
}

function Navbar({ isOpen, onOpen }: NavbarProps) {
  const router = useRouter();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <nav className={`bg-red-800 relative ${isOpen ? "hidden md:block" : ""}`}>
      <div className="text-white flex justify-between pl-32">
        <ul className="font-extrabold p-4 space-x-4 hidden md:flex text-md relative">
          <button
            className="hover:bg-red-700 p-4"
            onClick={() => router.push("/")}
            aria-label="Open navbar on smaller screens"
          >
            <House />
          </button>
          <li
            className="relative"
            onMouseEnter={() => setHoveredLink("about")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              className="hover:bg-red-700 p-4 block"
              aria-label="Go to about page"
              href="/about"
            >
              ABOUT
            </Link>
            {hoveredLink === "about" && (
              <ul className="absolute left-0 mt-0 bg-[#3d3d3d] w-72 shadow-lg z-10">
                <li>
                  <Link href="/about" className="block p-4 hover:bg-black">
                    Annual Reports
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block p-4 hover:bg-black">
                    Computational Science
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block p-4 hover:bg-black">
                    Diversity, Equity, & Inclusion
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block p-4 hover:bg-black">
                    Memberships
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block p-4 hover:bg-black">
                    Mission And Vision
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block p-4 hover:bg-black">
                    ORG Chart
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block p-4 hover:bg-black">
                    Phone Directory
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block p-4 hover:bg-black">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block p-4 hover:bg-black">
                    Directions
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => setHoveredLink("people")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              className="hover:bg-red-700 p-4 block"
              aria-label="Go to people page"
              href="/people"
            >
              PEOPLE
            </Link>
            {hoveredLink === "people" && (
              <ul className="absolute left-0 mt-0 bg-[#3d3d3d] w-60 shadow-lg z-10">
                <li>
                  <Link href="/people" className="block p-4 hover:bg-black">
                    Core Faculty
                  </Link>
                </li>
                <li>
                  <Link href="/people" className="block p-4 hover:bg-black">
                    Advisory Board
                  </Link>
                </li>
                <li>
                  <Link href="/people" className="block p-4 hover:bg-black">
                    Affiliates
                  </Link>
                </li>
                <li>
                  <Link href="/people" className="block p-4 hover:bg-black">
                    Alumni
                  </Link>
                </li>
                <li>
                  <Link href="/people" className="block p-4 hover:bg-black">
                    Postdocs & Students
                  </Link>
                </li>
                <li>
                  <Link href="/people" className="block p-4 hover:bg-black">
                    Staff
                  </Link>
                </li>
                <li>
                  <Link href="/people" className="block p-4 hover:bg-black">
                    Student Association
                  </Link>
                </li>
              </ul>
            )}
          </li>
            <Link
              className="hover:bg-red-700 p-4 block"
              aria-label="Go to events page"
              href="/events"
            >
              EVENTS
            </Link>
          <li
            className="relative"
            onMouseEnter={() => setHoveredLink("news")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              className="hover:bg-red-700 p-4 block"
              aria-label="Go to news page"
              href="/news"
            >
              NEWS
            </Link>
            {hoveredLink === "news" && (
              <ul className="absolute left-0 mt-0 bg-[#3d3d3d] w-24 shadow-lg z-10">
                <li>
                  <Link href="/news" className="block p-4 hover:bg-black">
                    Current
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="block p-4 hover:bg-black">
                    Archive
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => setHoveredLink("research")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              className="hover:bg-red-700 p-4 block"
              aria-label="Go to research page"
              href="/research"
            >
              RESEARCH
            </Link>
            {hoveredLink === "research" && (
              <ul className="absolute left-0 mt-0 bg-[#3d3d3d] w-80 shadow-lg z-10">
                <li>
                  <Link href="/research" className="block p-4 hover:bg-black">
                    Research Themes
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="block p-4 hover:bg-black">
                    REU: Data + Computing = Discovery
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => setHoveredLink("opportunities")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              className="hover:bg-red-700 p-4 block"
              aria-label="Go to opportunities page"
              href="/opportunities"
            >
              OPPORTUNITIES
            </Link>
            {hoveredLink === "opportunities" && (
              <ul className="absolute left-0 mt-0 bg-[#3d3d3d] w-80 shadow-lg z-10">
                <li>
                  <Link
                    href="/opportunities"
                    className="block p-4 hover:bg-black"
                  >
                    Awards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/opportunities"
                    className="block p-4 hover:bg-black"
                  >
                    Becoming An Affiliate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/opportunities"
                    className="block p-4 hover:bg-black"
                  >
                    Graduate Certificates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/opportunities"
                    className="block p-4 hover:bg-black"
                  >
                    K-12
                  </Link>
                </li>
                <li>
                  <Link
                    href="/opportunities"
                    className="block p-4 hover:bg-black"
                  >
                    Internships
                  </Link>
                </li>
                <li>
                  <Link
                    href="/opportunities"
                    className="block p-4 hover:bg-black"
                  >
                    Open Positions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/opportunities"
                    className="block p-4 hover:bg-black"
                  >
                    Professional Development Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/opportunities"
                    className="block p-4 hover:bg-black"
                  >
                    Undergraduate Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="/opportunities"
                    className="block p-4 hover:bg-black"
                  >
                    Sabbaticals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/opportunities"
                    className="block p-4 hover:bg-black"
                  >
                    Seed Funding
                  </Link>
                </li>
              </ul>
            )}
          </li>
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
