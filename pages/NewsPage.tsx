"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Searchbar from "@/components/Searchbar";

function NewsPage() {
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default NewsPage;
