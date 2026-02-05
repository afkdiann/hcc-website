import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-center">
      <Link href="https://www.stonybrook.edu/">
        <div className="flex items-center m-4 md:pl-32">
          <Image
            src="/assets/sbulogo.png"
            alt="Stony Brook University Logo"
            width={70}
            height={70}
          />
          <h1 className="text-2xl font-serif text-center md:text-left">
            Stony Brook <span className="text-red-800">University</span>
          </h1>
        </div>
      </Link>
      <div className="border-l h-8 my-auto hidden md:inline-flex"></div>
      <Link href="/">
        <div className="flex items-center m-4 md:pr-32">
          <h1 className="text-xl md:text-2xl text-center">
            Human-Centered Computing (HCC)
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default Banner;
