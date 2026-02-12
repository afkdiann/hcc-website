import SectionHeader from "@/components/SectionHeader";
import { ChevronRight } from "lucide-react";

function NewsSection() {
    return ( 
        <section className="w-full md:w-1/3 md:mx-4">
            <SectionHeader header="NEWS"/>
            <div className="bg-white my-8 md:mx-4 w-full h-96">
                Hello World!
            </div>
            <button className="bg-white md:mx-4 w-full mt-4 flex justify-center p-2 border-4 border-red-800 text-red-800 hover:text-white hover:bg-red-800 font-bold">MORE NEWS <ChevronRight /></button>
        </section>
     );
}

export default NewsSection;