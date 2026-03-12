"use client";

import Searchbar from "@/components/ContactBar";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
import ImageCarousel from "@/components/ImageCarousel";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";

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
      <main className="bg-gray-100">
        <div className="flex justify-center px-4 gap-4 py-8">
          <div className="w-1/3 py-1 flex justify-center items-center flex-col space-y-4 md:space-y-12">
            <h2 className="text-2xl font-bold text-center">Welcome to HCC!</h2>
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
            <div className="hidden md:block">
              <p className="text-sm leading-4.5 md:leading-7 md:text-xl text-center">
                Learn more about research initiatives{" "}
                <span className="text-blue-600 underline underline-offset-2">
                  <Link href="/research">here</Link>
                </span>
                .
              </p>
            </div>
          </div>
          <div className="w-2/3">
            <ImageCarousel />
          </div>
        </div>
        <div className="md:hidden block pb-8">
          <p className="text-sm leading-4.5 md:leading-7 md:text-xl text-center">
            Learn more about research initiatives{" "}
            <span className="text-blue-600 underline underline-offset-2">
              <Link href="/research">here</Link>
            </span>
          </p>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
