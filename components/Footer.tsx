import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-full bg-linear-65 from-[#B5179E] to-[#4361EE] bg-cover bg-center flex justify-center items-center" role="contentinfo" aria-label="Site footer">
      <div className="flex-col space-y-3 my-8 text-xs sm:text-sm font-semibold px-4 sm:px-8">
        <p className="text-white text-center xs:text-[11px] text-sm sm:text-md md:text-[14px]">
          Human-Centered Computing
          <span className="border-l border-gray-700 mx-1 sm:mx-2" aria-hidden="true" />
          Stony Brook University
          <span className="border-l border-gray-700 mx-1 sm:mx-2" aria-hidden="true" />
          Stony Brook, NY 11794-5250
        </p>
        <div className="flex justify-center p-4 w-full xs:w-2/3 mx-auto">
          <Image
            src="./logos/hcc_logo_white.svg"
            alt="Human-Centered Computing logo"
            width={100}
            height={100}
            className="w-16 sm:w-20 md:w-25"
          />
          <div className="pl-3 sm:pl-4 text-white my-auto text-base sm:text-md md:text-lg flex-col font-bold leading-tight ml-2 sm:ml-4">
            <p>Human-Centered</p>
            <p className="text-center">Computing</p>
          </div>
        </div>
        <p className="text-white text-center xs:text-[11px] text-sm sm:text-md md:text-[14px]">
          2026{" "}
          <Link href="https://iacs.stonybrook.edu/" aria-label="Visit the IACS website (opens external site)" target="_blank" rel="noopener noreferrer">IACS</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
