"use client";

import { useState } from "react";

function Searchbar() {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className="hidden md:flex justify-end space-x-8 py-2.5 w-full bg-black bg-[url('/images/searchbar-background.png')] bg-cover bg-center">
      <p className={`text-xs font-bold ${focused && "p-1"}`}>CONTACT</p>
      <label htmlFor="search" className="flex text-xs text-red-800">
        <input
          id="search"
          value={input}
          placeholder="SEARCH"
          onChange={(e) => setInput(e.target.value)}
          onClick={() => setFocused(true)}
          className="focus:bg-white focus:p-1 focus:rounded-2xl focus:border-2 focus:text-black placeholder-red-800 placeholder-opacity-100 placeholder:font-bold text-black mr-2"
        />
      </label>
    </div>
  );
}

export default Searchbar;
