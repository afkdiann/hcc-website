import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-center">
      <Link href="https://www.stonybrook.edu/">
        <div className="flex items-center m-6 md:pl-32">
          <Image
            src="/logos/sbulogo.svg"
            alt="Stony Brook University Logo"
            width={300}
            height={200}
          />
        </div>
      </Link>
      <div className="border-l border-gray-900 h-8 my-auto hidden md:inline-flex" />
      <Link href="/">
        <div className="flex items-center m-4 md:pr-32">
          <Image
            src="/logos/logo.svg"
            alt="HCC Logo"
            width={75}
            height={50}
          />
          <h1 className="text-xl md:text-2xl text-center font-semibold ml-4">
            Human-Centered Computing
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default Banner;
