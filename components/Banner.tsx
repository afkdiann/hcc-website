import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-center bg-gray-100">
      <Link href="https://iacs.stonybrook.edu/" aria-label="Visit the Institute for Advanced Computational Science (IACS) website (opens external site)" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center m-4 sm:m-6 px-4 sm:pl-8 md:pl-8 lg:pl-16 xl:pl-32">
          <Image
            src="/logos/iacs_logo.svg"
            alt="IACS Logo"
            width={300}
            height={200}
            className="w-48 sm:w-56 md:w-64 lg:w-75 h-auto"
          />
        </div>
      </Link>
      <div className="border-l border-gray-900 h-8 my-auto hidden md:inline-flex" aria-hidden="true" />
      <Link href="/" aria-label="Human-Centered Computing - Go to home page">
        <div className="flex items-center m-4 px-4">
          <Image
            src="/logos/hcc_logo_black.svg"
            alt="HCC Logo"
            width={75}
            height={50}
            className="w-12 sm:w-16 md:w-18.75 h-auto"
          />
          <h1 className="text-md xs:text-lg md:text-xl text-center font-semibold ml-3 sm:ml-4">
            Human-Centered Computing
          </h1>
        </div>
      </Link>
      </div>
  );
}

export default Banner;
