import Link from "next/link";

interface ResearchCardProps {
  name: string;
  members: string;
  slug: string;
}

function ResearchCard({ name, members, slug }: ResearchCardProps) {
  return (
    <article
      aria-label={`Research project: ${name}`}
      className="p-0.5 rounded-lg bg-linear-to-br from-[#4361EE] to-[#B5179E] w-full xs:w-96 sm:w-108 md:w-120 xl:w-140"
    >
      <Link
        href={`/research/${slug}`}
        className="block bg-white rounded-lg h-full p-4 sm:p-6 space-y-3 sm:space-y-4 hover:bg-gray-50 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#4361EE]"
        aria-label={`View details for ${name} research project`}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-[#480CA8]">
          {name}
        </h2>
        <p className="text-sm sm:text-base text-gray-700">{members}</p>
      </Link>
    </article>
  );
}

export default ResearchCard;
