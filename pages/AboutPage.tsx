"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Searchbar from "@/components/ContactBar";

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
      <main className="h-196">
        <div className="py-8 px-8 md:px-80 space-y-6 flex flex-col items-center">
          <h1 className="font-bold text-4xl border-b border-gray-400">About</h1>
          <p>Human-Centered Computing is a research theme at the <a className="text-blue-600" href="https://iacs.stonybrook.edu/index.php" target="_blank" rel="noopener">Institute for Advanced Computational Science (IACS).</a></p>
          <p>Our research is concerned with studying and enhancing human behavior using computational tools. Here, we take &quot;human behavior&quot; in the broad sense: it covers everyday human behavior in small groups (linguistics, psychology); human behavior and agency in society and its institutions, and across societies and time (sociology, economics, political science, history); and human creativity and the study of human creativity (rhetoric, literature studies, and the arts). Social scientists have long studied the interactions and communications that inform decisions and structure communities. However, as social networks have grown larger and more complex and have increasingly moved &lsquo;online,&rsquo; studying these dynamics requires doing so at scales heretofore inaccessible for researchers, demanding new skills and opening opportunities for new trans-disciplinary collaborations.</p>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AboutPage;
