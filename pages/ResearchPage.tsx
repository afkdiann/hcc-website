"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Searchbar from "@/components/ContactBar";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Sidebar from "@/components/Sidebar";

interface ResearchPageProps{
  header: string;
  currentSection?: string;
  mainContent: React.ReactNode;
}

function ResearchPage({ header, currentSection, mainContent }: ResearchPageProps) {
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
      <main className="min-h-screen">
        <div className="flex py-4 px-8 lg:px-16 xl:px-36 text-sm">
          <p className="hover:underline hover:underline-offset-2">
            <Link href="/">Home</Link>{" "}
          </p>
          <ChevronRight className="size-5" />
          <p className="hover:underline hover:underline-offset-2">
            <Link href="/research">Research</Link>
          </p>
          {currentSection && <>
            <ChevronRight className="size-5" />
            <p className="hover:underline hover:underline-offset-2">
              <Link href={`/research/${currentSection?.toLowerCase().replace(" ", "-")}`}>
                {currentSection}
              </Link>
            </p>
          </>}
        </div>
        <div className="flex flex-col lg:flex-row">
          <Sidebar
            header="Research"
            sectionList={["Dynamics of Creativity"]}
            page="research"
          />
          <div className="w-full lg:w-2/3 px-8 lg:px-0">
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 pt-6 sm:pt-8">{header}</h1>
            {mainContent}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ResearchPage;
