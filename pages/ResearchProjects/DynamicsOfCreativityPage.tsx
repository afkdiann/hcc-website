import ResearchPage from "@/pages/ResearchPage";
import ResearchProjectDescription from "@/components/ResearchProjectDescription";
import { researchProjects } from "@/public/data";


function DynamicsOfCreativityPage() {
  const project = researchProjects.find((project) => project.name === "Dynamics of Creativity");

  return (
    <div>
      <ResearchPage header="Dynamics of Creativity" currentSection="Dynamics of Creativity" mainContent={
        <ResearchProjectDescription description={project?.description} funding={project?.funding} members={project?.members} />
      } />
    </div>
  );
}

export default DynamicsOfCreativityPage;
