"use client";

import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Searchbar from "@/components/Searchbar";
import ImageCarousel from "@/components/ImageCarousel";
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
        <div className="h-196 p-4">
          <h1>Hello World!</h1>
          <ImageCarousel />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
