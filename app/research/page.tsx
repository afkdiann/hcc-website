import { Metadata } from "next";
import ResearchPage from "@/pages/ResearchPage";
import ResearchPageMainContent from "@/components/ResearchPageMainContent";

export const metadata: Metadata = {
  title: "Research | Human-Centered Computing (HCC)",
  description: "Current and past research projects from the HCC team",
};

function Research() {
  return(
    <ResearchPage header="HCC Research Projects" mainContent={
      <ResearchPageMainContent />
    }/>
  )
}

export default Research;
