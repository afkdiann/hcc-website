"use client";

import Link from "next/link";
import { X, ChevronDown, ChevronUp, Star } from "lucide-react";
import { useState } from "react";

interface DropdownMenuProps {
  onClose: () => void;
}

function DropdownMenu({ onClose }: DropdownMenuProps) {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPeopleOpen, setIsPeopleOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const [isOpportunitiesOpen, setIsOpportunitiesOpen] = useState(false);

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

        <div className="flex justify-between items-center hover:bg-red-700">
          <Link
            className="hover:bg-red-700 p-4"
            aria-label="Go to about page"
            href="/about"
          >
            ABOUT
          </Link>
          <div
            className={`w-1/8 flex justify-center p-4 text-center ${isAboutOpen ? "bg-red-900" : "hover:bg-red-900"}`}
          >
            {isAboutOpen ? (
              <ChevronUp
                onClick={() => setIsAboutOpen(false)}
                aria-label="Collapse about dropdown"
              />
            ) : (
              <ChevronDown
                onClick={() => setIsAboutOpen(true)}
                aria-label="Expand about dropdown"
              />
            )}
          </div>
        </div>
        {isAboutOpen && (
          <div className="bg-red-900 flex flex-col" aria-live="polite">
            <Link aria-label="Go to annual reports page" href="/about">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Annual Reports
              </div>
            </Link>
            <Link aria-label="Go to computational science page" href="/about">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" />
                Computational Science
              </div>
            </Link>
            <Link aria-label="Go to DEI page" href="/about">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Diversity, Equity, & Inclusion
              </div>
            </Link>
            <Link aria-label="Go to memberships page" href="/about">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Memberships
              </div>
            </Link>
            <Link aria-label="Go to mission and vision page" href="/about">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Mission And Vision
              </div>
            </Link>
            <Link aria-label="Go to ORG chart page" href="/about">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                ORG Chart
              </div>
            </Link>
            <Link aria-label="Go to phone directory page" href="/about">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Phone Directory
              </div>
            </Link>
            <Link aria-label="Go to contact page" href="/about">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Contact
              </div>
            </Link>
            <Link aria-label="Go to directions page" href="/about">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Directions
              </div>
            </Link>
          </div>
        )}

        <div className="flex justify-between items-center hover:bg-red-700">
          <Link
            className="hover:bg-red-700 p-4"
            aria-label="Go to people page"
            href="/people"
          >
            PEOPLE
          </Link>
          <div
            className={`w-1/8 flex justify-center p-4 text-center ${isPeopleOpen ? "bg-red-900" : "hover:bg-red-900"}`}
          >
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
          <div className="bg-red-900 flex flex-col" aria-live="polite">
            <Link aria-label="Go to core faculty page" href="/people">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Core Faculty
              </div>
            </Link>
            <Link aria-label="Go to advisory board page" href="/people">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Advisory Board
              </div>
            </Link>
            <Link aria-label="Go to affiliates page" href="/people">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Affiliates
              </div>
            </Link>
            <Link aria-label="Go to alumni page" href="/people">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Alumni
              </div>
            </Link>
            <Link aria-label="Go to postdocs and students page" href="/people">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Postdocs & Students
              </div>
            </Link>
            <Link aria-label="Go to staff page" href="/people">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Staff
              </div>
            </Link>
            <Link aria-label="Go to student association page" href="/people">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Student Association
              </div>
            </Link>
          </div>
        )}

        <Link
          className="hover:bg-red-700 p-4"
          aria-label="Go to events page"
          href="/events"
        >
          EVENTS
        </Link>

        <div className="flex justify-between items-center hover:bg-red-700">
          <Link className="p-4 w-7/8" aria-label="Go to news page" href="/news">
            NEWS
          </Link>
          <div
            className={`w-1/8 flex justify-center p-4 text-center ${isNewsOpen ? "bg-red-900" : "hover:bg-red-900"}`}
          >
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
          <div className="bg-red-900 flex flex-col" aria-live="polite">
            <Link aria-label="Go to current news page" href="/news">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Current
              </div>
            </Link>
            <Link aria-label="Go to archived news page" href="/news">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" />
                Archived
              </div>
            </Link>
          </div>
        )}

        <div className="flex justify-between items-center hover:bg-red-700">
          <Link
            className="hover:bg-red-700 p-4"
            aria-label="Go to research page"
            href="/research"
          >
            RESEARCH
          </Link>
          <div
            className={`w-1/8 flex justify-center p-4 text-center ${isResearchOpen ? "bg-red-900" : "hover:bg-red-900"}`}
          >
            {isResearchOpen ? (
              <ChevronUp
                onClick={() => setIsResearchOpen(false)}
                aria-label="Collapse research dropdown"
              />
            ) : (
              <ChevronDown
                onClick={() => setIsResearchOpen(true)}
                aria-label="Expand research dropdown"
              />
            )}
          </div>
        </div>
        {isResearchOpen && (
          <div className="bg-red-900 flex flex-col" aria-live="polite">
            <Link aria-label="Go to research themes page" href="/research">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Research Themes
              </div>
            </Link>
            <Link aria-label="Go to reu page" href="/research">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" />
                REU: Data + Computing = Discovery
              </div>
            </Link>
          </div>
        )}

        <div className="flex justify-between items-center hover:bg-red-700">
          <Link
            className="hover:bg-red-700 p-4"
            aria-label="Go to opportunities page"
            href="/opportunities"
          >
            OPPORTUNITIES
          </Link>
          <div
            className={`w-1/8 flex justify-center p-4 text-center ${isOpportunitiesOpen ? "bg-red-900" : "hover:bg-red-900"}`}
          >
            {isOpportunitiesOpen ? (
              <ChevronUp
                onClick={() => setIsOpportunitiesOpen(false)}
                aria-label="Collapse opportunities dropdown"
              />
            ) : (
              <ChevronDown
                onClick={() => setIsOpportunitiesOpen(true)}
                aria-label="Expand opportunities dropdown"
              />
            )}
          </div>
        </div>
        {isOpportunitiesOpen && (
          <div className="bg-red-900 flex flex-col" aria-live="polite">
            <Link aria-label="Go to awards page" href="/opportunities">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" /> 
                Awards
              </div>
            </Link>
            <Link
              aria-label="Go to become an affiliate page"
              href="/opportunities"
            >
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" />
                Become An Affiliate
              </div>
            </Link>
            <Link
              aria-label="Go to graduate certificates page"
              href="/opportunities"
            >
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" />
                Graduate Certificates
              </div>
            </Link>
            <Link aria-label="Go to k-12 page" href="/opportunities">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" />
                K-12
              </div>
            </Link>
            <Link aria-label="Go to internships page" href="/opportunities">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" />
                Internships
              </div>
            </Link>
            <Link aria-label="Go to open positions page" href="/opportunities">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" />
                Open Positions
              </div>
            </Link>
            <Link
              aria-label="Go to professional development program page"
              href="/opportunities"
            >
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" />
                Professional Development Program
              </div>
            </Link>
            <Link
              aria-label="Go to undergraduate research page"
              href="/opportunities"
            >
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" />
                Undergraduate Research
              </div>
            </Link>
            <Link aria-label="Go to sabbaticals page" href="/opportunities">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" />
                Sabbaticals
              </div>
            </Link>
            <Link aria-label="Go to seed funding page" href="/opportunities">
              <div className="flex items-center py-4 px-8 hover:bg-black">
                <Star className="mr-4 w-4 h-4" />
                SEED Funding
              </div>
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
}

export default DropdownMenu;
