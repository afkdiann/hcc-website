import { Metadata } from "next";
import DynamicsOfCreativityPage from "@/pages/ResearchProjects/DynamicsOfCreativityPage";

export const metadata: Metadata = {
  title: "Dynamics of Creativity",
  description: "Dynamics of Creativity Research Project",
};

export default function DynamicsOfCreativity() {
  return(
    <div>
        <DynamicsOfCreativityPage />
    </div>
  )
}