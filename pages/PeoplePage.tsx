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

interface Person {
  name: string;
  title: string;
  department: string;
  image: string;
  website?: string;
  email: string;
}

interface PeoplePageProps {
  currentSection: string;
  people: Person[];
}

function FacultyPage({ currentSection, people }: PeoplePageProps) {
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
        <nav aria-label="Breadcrumb" className="flex py-4 px-8 lg:px-16 xl:px-36 text-sm">
          <p className="hover:underline hover:underline-offset-2">
            <Link href="/" aria-label="Go to home page">Home</Link>{" "}
          </p>
          <ChevronRight className="size-5" aria-hidden="true" />
          <p className="hover:underline hover:underline-offset-2">
            <Link href="/people/faculty" aria-label="Go to people page">People</Link>
          </p>
          <ChevronRight className="size-5" aria-hidden="true" />
          <p className="hover:underline hover:underline-offset-2">
            <Link href={`/people/${currentSection.toLocaleLowerCase()}`} aria-current="page">
              {currentSection}
            </Link>
          </p>
        </nav>
        <div className="flex flex-col lg:flex-row">
          <Sidebar
            header="People"
            sectionList={["FACULTY", "POSTDOCS", "PHD STUDENTS"]}
            page = "people"
          />
          <div className="w-full lg:w-2/3 px-8 lg:px-0">
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 pt-6 sm:pt-8">{currentSection}</h1>
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center lg:justify-start">
              {people.map((person, index) => 
              <div key={index}>
                <ProfileCard name={person.name} title={person.title} department={person.department} image={person.image} website={person.website} email={person.email}/>
              </div>)}
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
