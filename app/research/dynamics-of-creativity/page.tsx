import { Metadata } from "next";
import DynamicsOfCreativityPage from "@/pages/ResearchProjects/DynamicsOfCreativityPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dynamics of Creativity",
  description: "Dynamics of Creativity Research Project",
};

export default function DynamicsOfCreativity() {
  return(
    <div>
        <DynamicsOfCreativityPage />
        <footer>
          <Footer />
        </footer>
    </div>
  )
}