import SectionHeader from "@/components/SectionHeader";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

function NewsSection() {
  return (
    <section className="w-full md:w-1/3 md:mx-4">
      <SectionHeader header="NEWS" />
      <div className="bg-white my-8 md:mx-4 w-full h-96">Hello World!</div>
      <Link href="/news">
        <button className="mb-8 md:mb-0 bg-white md:mx-4 w-full mt-4 flex justify-center p-2 border-4 border-red-800 text-red-800 hover:text-white hover:bg-red-800 font-bold">
          MORE NEWS <ChevronRight />
        </button>
      </Link>
    </section>
  );
}

export default NewsSection;
