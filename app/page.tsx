"use client";

import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { useState } from "react";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header>
        <Navbar isOpen={isOpen} onOpen={() => setIsOpen(true)} />
        <div aria-live="polite">
          {isOpen && <DropdownMenu onClose={() => setIsOpen(false)} />}
        </div>
      </header>
      <main>
        <div className="flex">
          <Sidebar header="Home" sectionList={["Section 1", "Section 2", "Section 3"]} />
          <div>
            <h1 className="p-4 h-196">Hello World!</h1>
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
