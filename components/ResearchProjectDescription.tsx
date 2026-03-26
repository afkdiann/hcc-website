interface ResearchProjectDescriptionProps {
  description?: string;
  funding?: string;
  members?: string;
}

function ResearchProjectDescription({ description, funding, members }: ResearchProjectDescriptionProps) {
  return (
    <div className="flex flex-col gap-4 pr-1 sm:pr-2 md:pr-4 lg:pr-36">
      <p className="text-base sm:text-lg mb-6 sm:mb-8">{description}</p>
      <p className="text-base sm:text-lg mb-6 sm:mb-8">{funding}</p>
      <p className="text-base sm:text-lg mb-6 sm:mb-8">{members}</p>
    </div>
  );
}

export default ResearchProjectDescription;