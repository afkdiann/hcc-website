import { Metadata } from "next";
import OpportunitiesPage from "@/components/OpportunitiesPage";
import OpportunitiesPageMainContent from "@/components/OpportunitiesPageMainContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Hub for student involvement",
};

function Research() {
  return (
    <div>
      <OpportunitiesPage
        header="Opportunities"
        mainContent={<OpportunitiesPageMainContent />}
      />
      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
}

export default Research;
