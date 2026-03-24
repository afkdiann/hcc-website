"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Searchbar from "@/components/ContactBar";
import Image from "next/image";

function AboutPage() {
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
        <div className="py-6 sm:py-8 px-6 sm:px-12 md:px-24 lg:px-48 xl:px-80 space-y-4 sm:space-y-6 flex flex-col items-center">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl border-b border-gray-400">
            About
          </h1>
          <p className="text-base sm:text-md md:text-lg text-center">
            Human-Centered Computing is a research theme at the{" "}
            <a
              className="text-blue-600"
              href="https://iacs.stonybrook.edu/index.php"
              target="_blank"
              rel="noopener"
            >
              Institute for Advanced Computational Science (IACS).
            </a>
          </p>
          <p className="text-base sm:text-md md:text-lg text-center">
            Our research is concerned with studying and enhancing human behavior
            using computational tools. Here, we take &quot;human behavior&quot;
            in the broad sense: it covers everyday human behavior in small
            groups (linguistics, psychology); human behavior and agency in
            society and its institutions, and across societies and time
            (sociology, economics, political science, history); and human
            creativity and the study of human creativity (rhetoric, literature
            studies, and the arts). Social scientists have long studied the
            interactions and communications that inform decisions and structure
            communities. However, as social networks have grown larger and more
            complex and have increasingly moved &lsquo;online,&rsquo; studying
            these dynamics requires doing so at scales heretofore inaccessible
            for researchers, demanding new skills and opening opportunities for
            new trans-disciplinary collaborations.
          </p>
        </div>
        <Image
          src="/images/pickle-fountain.png"
          alt="IACS members at the pickle fountain event"
          width={600}
          height={600}
          className="xs:w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 min-w-[200px] pb-8 mx-auto"
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AboutPage;
