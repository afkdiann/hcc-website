"use client";

import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Searchbar from "@/components/Searchbar";
import ImageCarousel from "@/components/ImageCarousel";
import SectionCard from "@/components/SectionCard";
import { useState } from "react";

function HomePage() {
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
      <main>
        <div className="h-196 p-4 bg-gray-100">
          <div className="flex justify-center">
            <ImageCarousel />
          </div>
          <div className="flex justify-between">
            <SectionCard header="NEWS"/>
            <SectionCard header="CALENDAR"/>
            <SectionCard header="VIDEOS"/>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
