"use client";

import Link from "next/link";
import { X, ChevronDown, ChevronUp, Star } from "lucide-react";
import { useState } from "react";

interface DropdownMenuProps {
  onClose: () => void;
}

function DropdownMenu({ onClose }: DropdownMenuProps) {
  const [isPeopleOpen, setIsPeopleOpen] = useState(false);

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
          <div className="flex justify-between items-center">
            <Link
              aria-label="Go to people page"
              href="/people/faculty"
              className="hover:underline hover:underline-offset-2"
            >
              PEOPLE
            </Link>
            <div className="w-1/8 flex justify-center text-center">
              {isPeopleOpen ? (
                <ChevronUp
                  onClick={() => setIsPeopleOpen(false)}
                  aria-label="Collapse people dropdown"
                />
              ) : (
                <ChevronDown
                  onClick={() => setIsPeopleOpen(true)}
                  aria-label="Expand people dropdown"
                />
              )}
            </div>
          </div>
          {isPeopleOpen && (
            <div className="flex flex-col" aria-live="polite">
              <Link aria-label="Go to faculty page" href="/people/faculty">
                <div className="flex items-center py-2 px-8 hover:underline hover:underline-offset-2">
                  <Star className="mr-4 w-4 h-4" />
                  Faculty
                </div>
              </Link>
              <Link aria-label="Go to postdocs page" href="/people/postdocs">
                <div className="flex items-center py-2 px-8 hover:underline hover:underline-offset-2">
                  <Star className="mr-4 w-4 h-4" />
                  Postdocs
                </div>
              </Link>
              <Link
                aria-label="Go to phd students page"
                href="/people/phd-students"
              >
                <div className="flex items-center py-2 px-8 hover:underline hover:underline-offset-2">
                  <Star className="mr-4 w-4 h-4" />
                  PHD Students
                </div>
              </Link>
            </div>
          )}
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
        <li className="pb-4">
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
