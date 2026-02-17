import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-full bg-black bg-[url('/images/footer-background.png')] bg-cover bg-center flex justify-center items-center">
      <div className="flex-col space-y-3 my-8 text-[10px] md:text-sm font-semibold">
        <p className="text-white text-center">
          Human-Centered Computing
          <span className="border-l border-gray-600 mx-2" />
          Stony Brook University
          <span className="border-l border-gray-600 mx-2" />
          Stony Brook, NY 11794-5250
        </p>
        <p className="text-white text-center">Phone: (123) 456-7890</p>
        <p className="text-white text-center">
          <a href="mailto:margaret.schedel@stonybrook.edu">
            margaret.schedel@stonybrook.edu
          </a>
        </p>
        <div className="bg-white flex justify-center p-4 w-2/3 mx-auto">
          <Image
            src="/logos/logo.svg"
            alt="HCC Logo"
            width={100}
            height={100}
          />
          <div className="pl-4 text-black text-lg flex-col font-light leading-tight ml-4 font-serif">
            <p>Human-Centered</p>
            <p className="text-center">Computing</p>
          </div>
        </div>
        <div className="text-white text-center space-x-4">
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
        <p className="text-white text-center">
          © 2026{" "}
          <Link href="https://www.stonybrook.edu/">Stony Brook University</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
