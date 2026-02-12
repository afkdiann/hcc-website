import SectionHeader from "@/components/SectionHeader";
import { ChevronRight } from "lucide-react";

function CalendarSection() {
    return ( 
        <section className="w-full md:w-1/3 md:mx-4">
            <SectionHeader header="CALENDAR"/>
            <div className="my-8 md:mx-4 w-full h-96">

            </div>
             <button className="bg-white md:mx-4 w-full mt-4 flex justify-center p-2 border-4 border-red-800 text-red-800 hover:text-white hover:bg-red-800 font-bold">ALL EVENTS <ChevronRight /></button>
        </section>
     );
}

export default CalendarSection;