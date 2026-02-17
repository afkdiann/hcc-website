"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Searchbar from "@/components/Searchbar";
import SocialsSideBar from "@/components/SocialsSideBar";
import ReturnToTopButton from "@/components/ReturnToTopButton";

function ResearchPage() {
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
      <main className="h-196"></main>
      <aside>
        <SocialsSideBar />
      </aside>
      <footer>
        <Footer />
        <div className="fixed bottom-4 right-2">
          <ReturnToTopButton />
        </div>
      </footer>
    </div>
  );
}

export default ResearchPage;
