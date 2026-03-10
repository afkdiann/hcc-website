"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Searchbar from "@/components/ContactBar";
import Sidebar from "@/components/Sidebar";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ProfileCard from "@/components/ProfileCard";

interface PeoplePageProps {
  currentSection: string;
}

function FacultyPage({ currentSection }: PeoplePageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header>
        <Searchbar />
        <Banner />
        <Navbar isOpen={isOpen} onOpen={() => setIsOpen(true)} />
        <div aria-live="polite">
          {isOpen && <DropdownMenu onClose={() => setIsOpen(false)} />}
        </div>
      </header>
      <main className="pb-16">
        <div className="flex py-4 px-12 md:px-36 text-sm">
          <p className="hover:underline hover:underline-offset-2">
            <Link href="/">Home</Link>{" "}
          </p>
          <ChevronRight className="size-5" />
          <p className="hover:underline hover:underline-offset-2">
            <Link href="/people/faculty">People</Link>
          </p>
          <ChevronRight className="size-5" />
          <p className="hover:underline hover:underline-offset-2">
            <Link href={`/people/${currentSection.toLocaleLowerCase()}`}>
              {currentSection}
            </Link>
          </p>
        </div>
        <div className="flex">
          <Sidebar
            header="People"
            sectionList={["FACULTY", "POSTDOCS", "PHD STUDENTS"]}
          />
          <div className="w-2/3 mx-auto">
            <h1 className="text-3xl font-extrabold mb-8 pt-8">{currentSection}</h1>
            <div className="flex flex-wrap gap-8">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default FacultyPage;
