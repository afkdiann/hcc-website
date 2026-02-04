"use client";

import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
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
        <h1 className="p-4">Hello World!</h1>
      </main>
    </div>
  );
}

export default HomePage;
