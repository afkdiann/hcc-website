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
      className={`bg-linear-65 from-[#4361EE] to-[#B5179E] p-4 relative ${isOpen ? "hidden md:block" : ""}`}
    >
      <div className="text-white flex justify-between pl-32">
        <ul className="font-extrabold space-x-4 hidden md:flex text-md relative">
          <button className="p-4 block group" onClick={() => router.push("/")}>
            <span className="inline-block border-b-2 border-transparent group-hover:border-current">
              <House />
            </span>
          </button>
          <li>
            <Link
              className="p-4 block hover:underline-offset-2 hover:underline"
              aria-label="Go to about page"
              href="/about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className="p-4 block hover:underline-offset-2 hover:underline"
              aria-label="Go to people page"
              href="/people/faculty"
            >
              PEOPLE
            </Link>
          </li>
          <li>
            <Link
              className="p-4 block hover:underline-offset-2 hover:underline"
              aria-label="Go to research page"
              href="/research"
            >
              RESEARCH
            </Link>
          </li>
          <li>
            <Link
              className="p-4 block hover:underline-offset-2 hover:underline"
              aria-label="Go to opportunities page"
              href="/opportunities"
            >
              OPPORTUNITIES
            </Link>
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
