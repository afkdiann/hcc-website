"use client";

import Searchbar from "@/components/ContactBar";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
import ImageCarousel from "@/components/ImageCarousel";
import Footer from "@/components/Footer";
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
        <div className="flex justify-center px-4 gap-4 bg-gray-100 py-8">
          <div className="text-center w-1/3 py-1 flex justify-center items-center flex-col">
            <h2 className="text-2xl font-bold mb-4">Welcome to HCC!</h2>
            <p className="text-sm leading-4.5 md:leading-7 md:text-xl">
              Human-Centered Computing is a research theme at the{" "}
              <a
                className="text-blue-600"
                href="https://iacs.stonybrook.edu/index.php"
                target="_blank"
                rel="noopener"
              >
                Institute for Advanced Computational Science (IACS)
              </a>
              , focused on understanding and enhancing human behavior using
              computational tools.
            </p>
          </div>
          <div className="w-2/3">
            <ImageCarousel />
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
