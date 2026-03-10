interface ProfileCardProps {
  name: string;
  title: string;
  department: string;
  image: string;
  website?: string;
}

function ProfileCard({ name, title, department, image, website }: ProfileCardProps) {
  return (
    <div className="p-0.5 rounded-lg bg-linear-to-br from-[#4361EE] to-[#B5179E] w-80 h-72 md:w-96 md:h-96">
      <div className="bg-white rounded-lg h-full">
        {name}, {title}, {department}
    </div>
    </div>
  );
}

export default ProfileCard;
