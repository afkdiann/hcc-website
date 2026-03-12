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
  email
}: ProfileCardProps) {
  return (
    <div className="p-0.5 rounded-lg bg-linear-to-br from-[#4361EE] to-[#B5179E] h-80 w-120 md:w-150">
      <div className="bg-white rounded-lg h-full p-6 space-y-4 flex flex-col">
        <Link href={website || "#"} className="text-2xl font-bold text-[#480CA8]">{name}</Link>
        <div className="flex gap-12 italic">
          <div>
            <Image src={image} alt={name} width={150} height={150}/>
          </div>
          <div className="flex flex-col space-y-4 text-[16px]">
            <p>{title}</p>
            <p>{department}</p>
            <a className="not-italic">Email: <span className="text-blue-600 underline">{email}</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
