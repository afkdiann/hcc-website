import { Metadata } from "next";
import ResearchPage from "@/pages/ResearchPage";

export const metadata: Metadata = {
  title: "Research | Human-Centered Computing (HCC)",
  description: "Current research projects from the HCC team",
};

function Research() {
  return(
    <ResearchPage />
  )
}

export default Research;
