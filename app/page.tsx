"use client";

import Searchbar from "@/components/Searchbar";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
import ImageCarousel from "@/components/ImageCarousel";
import NewsSection from "@/components/NewsSection";
import CalendarSection from "@/components/CalendarSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import ReturnToTopButton from "@/components/ReturnToTopButton";
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
        <div className="p-4 bg-gray-100">
          <div className="flex justify-center">
            <ImageCarousel />
          </div>
          <div className="md:flex md:justify-around px-12 space-y-12">
            <NewsSection/>
            <CalendarSection />
            <VideoSection />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
        <div className="fixed bottom-4 right-2">
          <ReturnToTopButton />
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
