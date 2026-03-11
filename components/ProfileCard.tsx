import Image from "next/image";

interface ProfileCardProps {
  name: string;
  title: string;
  department: string;
  image: string;
  website?: string;
}

function ProfileCard({
  name,
  title,
  department,
  image,
  website,
}: ProfileCardProps) {
  return (
    <div className="p-0.5 rounded-lg bg-linear-to-br from-[#4361EE] to-[#B5179E] w-80 h-72 md:w-96 md:h-96">
      <div className="bg-white rounded-lg h-full p-6 space-y-4 flex flex-col">
        <p className="text-2xl font-bold text-[#480CA8]">{name}</p>
        <div className="flex gap-6 italic">
          <Image src={image} alt={name} width={150} height={150} />
          <div className="flex flex-col space-y-4">
            <p>{title}</p>
            <p>{department}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
