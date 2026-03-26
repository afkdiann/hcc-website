import Image from "next/image";
import Link from "next/link";

interface ProfileCardProps {
  name: string;
  title: string;
  department: string;
  image: string;
  website?: string;
  email: string;
}

function ProfileCard({
  name,
  title,
  department,
  image,
  website,
  email,
}: ProfileCardProps) {
  return (
    <div className="p-0.5 rounded-lg bg-linear-to-br from-[#4361EE] to-[#B5179E] w-full xs:h-60 sm:h-64 md:h-72 lg:h-80 xl:h-88 xs:w-96 sm:w-108 md:w-120 xl:w-140">
      <div className="bg-white rounded-lg h-full p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col">
        <Link
          href={website || "#"}
          className="text-xl sm:text-2xl font-bold text-[#480CA8]"
        >
          {name}
        </Link>
        <div className="flex flex-col xs:flex-row gap-4 xs:gap-8 sm:gap-12 italic">
          <div className="flex justify-center xs:block">
            <Image
              src={image}
              alt={name}
              width={150}
              height={150}
              className="w-24 sm:w-32 md:w-[150px] h-auto"
            />
          </div>
          <div className="flex flex-col space-y-2 sm:space-y-4">
            <p className="text-base xs:text-[11px] md:text-[12px] lg:text-[15px]">{title}</p>
            <p className="text-base xs:text-[11px] md:text-[12px] lg:text-[15px]">{department}</p>
            <a className="not-italic text-base xs:text-[11px] md:text-[12px] lg:text-[15px]">
              Email: <span className="text-blue-600 underline">{email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
