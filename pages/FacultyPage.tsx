"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Searchbar from "@/components/ContactBar";
import Sidebar from "@/components/Sidebar";
import { ChevronRight } from "lucide-react"
import Link from "next/link";

function FacultyPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Faculty");

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
      <main className="h-196">
        <div className="flex py-4 px-12 md:px-36 text-sm">
          <p className="hover:underline hover:underline-offset-2"><Link href="/">Home</Link> </p>
          <ChevronRight className="size-5"/>
          <p className="hover:underline hover:underline-offset-2"><Link href="/people/faculty">People</Link></p>
          <ChevronRight className="size-5"/>
          <p className="hover:underline hover:underline-offset-2"><Link href={`/people/${activeSection.toLocaleLowerCase()}`}>{activeSection}</Link></p>
        </div>
        <Sidebar header="People" sectionList={["FACULTY", "POSTDOCS", "STUDENTS"]}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default FacultyPage;
