import { researchProjects } from "@/lib/data";
import ResearchCard from "@/components/ResearchCard";

function ResearchPageMainContent() {
  return (
    <div className="pr-1 sm:pr-2 md:pr-4 lg:pr-36">
      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center lg:justify-start">
        {researchProjects.map((project, index) => (
          <ResearchCard
            key={index}
            name={project.name}
            members={project.members}
            slug={project.name.toLowerCase().replaceAll(" ", "-")}
          />
        ))}
      </div>
    </div>
  );
}

export default ResearchPageMainContent;
