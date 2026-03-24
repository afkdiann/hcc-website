import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-full bg-linear-65 from-[#B5179E] to-[#4361EE] bg-cover bg-center flex justify-center items-center">
      <div className="flex-col space-y-3 my-8 text-xs sm:text-sm font-semibold px-4 sm:px-8">
        <p className="text-white text-center xs:text-[11px] text-sm sm:text-md md:text-[14px]">
          Human-Centered Computing
          <span className="border-l border-gray-600 mx-1 sm:mx-2" />
          Stony Brook University
          <span className="border-l border-gray-600 mx-1 sm:mx-2" />
          Stony Brook, NY 11794-5250
        </p>
        <div className="flex justify-center p-4 w-full xs:w-2/3 mx-auto">
          <Image
            src="/logos/logo.svg"
            alt="HCC Logo"
            width={100}
            height={100}
            className="w-16 sm:w-20 md:w-[100px]"
          />
          <div className="pl-3 sm:pl-4 text-white my-auto text-base sm:text-md md:text-lg flex-col font-bold leading-tight ml-2 sm:ml-4">
            <p>Human-Centered</p>
            <p className="text-center">Computing</p>
          </div>
        </div>
        <div className="text-white text-center space-x-2 sm:space-x-4 flex flex-wrap justify-center gap-y-2 xs:text-[11px] text-sm sm:text-md md:text-[14px]">
          <Link href="https://stonybrook-advocate.symplicity.com/collections/reportit/0b6f336796f84c815126efc191037df8">
            Discrimination
          </Link>
          <Link href="https://stonybrook-advocate.symplicity.com/collections/reportit/4a9adc9d6aa24c3cf581ea5daa46cd25">
            Sexual Misconduct
          </Link>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScW_Uc4kfzvlKlgwoJCHSJ2EG_6bd-LjcHowxnNGKV0309uxg/viewform">
            Accessibility Barrier
          </Link>
        </div>
        <p className="text-white text-center xs:text-[11px] text-sm sm:text-md md:text-[14px]">
          2026{" "}
          <Link href="https://www.stonybrook.edu/">Stony Brook University</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
