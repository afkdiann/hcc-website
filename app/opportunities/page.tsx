import { Metadata } from "next";
import OpportunitiesPage from "@/pages/OpportunitiesPage";

export const metadata: Metadata = {
  title: "Opportunities | Human-Centered Computing (HCC)",
  description: "Hub for student involvement",
};

function Opportunities() {
  return (
    <OpportunitiesPage />
  )
}

export default Opportunities;
