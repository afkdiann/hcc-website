import { Metadata } from "next";
import ResearchPage from "@/components/ResearchPage";
import ResearchPageMainContent from "@/components/ResearchPageMainContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Research | Human-Centered Computing (HCC)",
  description: "Current and past research projects from the HCC team",
};

function Research() {
  return (
    <div>
      <ResearchPage
        header="HCC Research Projects"
        mainContent={<ResearchPageMainContent />}
      />
      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
}

export default Research;
