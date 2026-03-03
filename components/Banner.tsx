import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <div>
      <div className="flex flex-col justify-between items-center md:flex-row md:items-center">
        <Link href="/">
          <div className="flex items-center m-4 md:pr-32">
            <Image
              src="/logos/logo.svg"
              alt="HCC Logo"
              width={75}
              height={50}
            />
            <h1 className="text-lg md:text-xl text-center font-semibold ml-4">
              Human-Centered Computing at Stony Brook
            </h1>
          </div>
        </Link>
        <Link href="https://iacs.stonybrook.edu/">
          <div className="flex items-center m-6 md:pl-32">
            <Image
              src="/logos/iacs_logo.svg"
              alt="IACS Logo"
              width={300}
              height={200}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
