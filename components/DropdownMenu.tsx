import Link from "next/link";
import { X } from "lucide-react";

interface DropdownMenuProps {
  onClose: () => void;
}

function DropdownMenu({ onClose }: DropdownMenuProps) {
  return (
    <div className="bg-red-900 text-white md:hidden fixed inset-0 font-extrabold text-md">
      <div className="flex justify-end items-center p-4">
        <button onClick={onClose} aria-label="Close navbar on smaller screens">
          <X />
        </button>
      </div>
      <ul className="space-x-4 flex flex-col mt-4 px-4">
        <Link
          className="hover:bg-red-700 p-4"
          aria-label="Go to home page"
          href="/"
        >
          HOME
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
    </div>
  );
}

export default DropdownMenu;
