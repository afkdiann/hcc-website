"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface DropdownMenuProps {
  onClose: () => void;
}

function DropdownMenu({ onClose }: DropdownMenuProps) {
  return (
    <div className="bg-linear-65 from-[#4361EE] to-[#B5179E] text-white md:hidden font-extrabold text-md">
      <div className="flex justify-end items-center p-4 hover:">
        <button
          onClick={onClose}
          aria-label="Close navbar on smaller screens"
          className="mt-4"
        >
          <X />
        </button>
      </div>
      <ul className="flex flex-col p-4 space-y-4">
        <li>
          <Link
            aria-label="Go to home page"
            href="/"
            className="hover:underline hover:underline-offset-2"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            aria-label="Go to about page"
            href="/about"
            className="hover:underline hover:underline-offset-2"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            aria-label="Go to people page"
            href="/people/faculty"
            className="hover:underline hover:underline-offset-2"
          >
            PEOPLE
          </Link>
        </li>
        <li>
          <Link
            aria-label="Go to research page"
            href="/research"
            className="hover:underline hover:underline-offset-2"
          >
            RESEARCH
          </Link>
        </li>
        <li>
          <Link
            aria-label="Go to opportunities page"
            href="/opportunities"
            className="hover:underline hover:underline-offset-2"
          >
            OPPORTUNITIES
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
