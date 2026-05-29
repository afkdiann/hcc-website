"use client";


import { useState } from "react";
import Navbar from "@/components/Navbar";
import DropdownMenu from "@/components/DropdownMenu";
import Banner from "@/components/Banner";
import Searchbar from "@/components/ContactBar";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { opportunities } from "@/lib/data";


function OpportunitiesPage() {
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
       <nav
         aria-label="Breadcrumb"
         className="flex py-4 px-8 lg:px-16 xl:px-36 text-sm"
       >
         <p className="hover:underline hover:underline-offset-2">
           <Link href="/" aria-label="Go to home page">
             Home
           </Link>{" "}
         </p>
         <ChevronRight className="size-5" aria-hidden="true" />
         <p className="hover:underline hover:underline-offset-2">
           <Link href="/opportunities" aria-label="Go to opportunities page">
             Opportunities
           </Link>
         </p>
       </nav>
       <div className="px-8 lg:px-16 xl:px-36">
         <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 pt-6 sm:pt-8">
           Opportunities
         </h1>
         <div className="pr-1 sm:pr-2 md:pr-4 lg:pr-36">
           <p className="text-base sm:text-lg mb-6 sm:mb-8 font-bold text-[#4361EE]">
             HCC is not offering any research opportunities at this time.
             Please check back again soon, or join our Slack channel through
             the link on the home page to stay updated on our research
             initiatives.
           </p>
         </div>
         <div className="flex flex-col gap-8 pr-1 sm:pr-2 md:pr-4 lg:pr-36">
           {opportunities.map((opportunity, index) => (
             <div
               key={index}
               className="border-b border-gray-200 pb-6 last:border-b-0"
             >
               <h2 className="text-lg sm:text-xl font-bold text-[#4361EE] mb-2">
                 {opportunity.name}
               </h2>
               <p className="text-base sm:text-lg mb-2">
                 {opportunity.description}
               </p>
               {opportunity.PI && opportunity.PI !== "N/A" && (
                 <p className="text-sm sm:text-base text-gray-600 font-medium">
                   PI: {opportunity.PI}
                 </p>
               )}
             </div>
           ))}
         </div>
       </div>
     </main>
   </div>
 );
}


export default OpportunitiesPage;
