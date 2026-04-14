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
      <main className="bg-gray-100" aria-label="Home page content">
        
        <div className="flex flex-col md:flex-row justify-center px-4 sm:px-6 md:px-8 gap-4 sm:gap-6 py-6 sm:py-8">
          <div className="w-full md:w-1/3 py-1 flex justify-center items-center flex-col space-y-4 md:space-y-9">
            <h2 className="text-xl xs:text-2xl md:text-3xl font-bold text-center">
              Welcome to HCC!
            </h2>
            <p className="text-sm leading-5 sm:leading-6 md:leading-7 sm:text-base md:text-xl text-center">
              Human-Centered Computing is a research theme at the{" "}
              <a
                className="text-blue-500 hover:text-blue-700 visited:text-purple-600"
                href="https://iacs.stonybrook.edu/index.php"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the Institute for Advanced Computational Science (IACS) website (opens in new tab)"
              >
                Institute for Advanced Computational Science (IACS)
              </a>
              , focused on understanding and enhancing human behavior using
              computational tools.
            </p>
            <div className="hidden lg:block">
              <p className="text-sm leading-4.5 md:leading-7 md:text-xl text-center">
                To stay updated on our research initiatives, join our Slack channel{" "}
                <span className="text-blue-500 hover:text-blue-700 visited:text-purple-600 font-bold underline underline-offset-2">
                  <a href="https://humancentered-dat7985.slack.com/join/shared_invite/zt-3ucxalaaq-wLQXki9A82D6XN5oZHyvBQ#/shared-invite/email" target="_blank" rel="noopener noreferrer" aria-label="Join the HCC Slack channel (opens in new tab)">here</a>
                </span>
                .
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <ImageCarousel />
          </div>
        </div>
        <div className="lg:hidden block pb-8">
          <p className="text-sm leading-5 sm:text-base text-center">
            To stay updated on our research initiatives, join our Slack channel{" "}
            <span className="text-blue-500 hover:text-blue-700 visited:text-purple-600 font-bold underline underline-offset-2">
              <a href="https://humancentered-dat7985.slack.com/join/shared_invite/zt-3ucxalaaq-wLQXki9A82D6XN5oZHyvBQ#/shared-invite/email" target="_blank" rel="noopener noreferrer" aria-label="Join the HCC Slack channel (opens in new tab)">here</a>
            </span>
            .
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
