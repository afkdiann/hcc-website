import ResearchPage from "@/pages/ResearchPage";
import ResearchProjectDescription from "@/components/ResearchProjectDescription";
import { researchProjects } from "@/public/data";
import Image from "next/image";

function DynamicsOfCreativityPage() {
  const project = researchProjects.find((project) => project.name === "Dynamics of Creativity");

  return (
    <div>
      <ResearchPage header="Dynamics of Creativity" currentSection="Dynamics of Creativity" mainContent={
        <ResearchProjectDescription description={project?.description} funding={project?.funding} members={project?.members} />
      } />
      <Image
          src="/images/pickle-fountain.png"
          alt="IACS members at the pickle fountain event"
          width={600}
          height={600}
          className="xs:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 min-w-[200px] pb-8 mx-auto"
        />
    </div>
  );
}

export default DynamicsOfCreativityPage;
