import { Metadata } from "next";
import PeoplePage from "@/pages/PeoplePage";

export const metadata: Metadata = {
  title: "People | Human-Centered Computing (HCC)",
  description: "List of faculty members on the HCC team",
};

function People() {
  return(
    <PeoplePage />
  );
}

export default People;
