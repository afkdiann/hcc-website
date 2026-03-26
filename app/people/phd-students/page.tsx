import { Metadata } from "next";
import PhdStudentsPage from "@/pages/People/PhdStudentsPage";

export const metadata: Metadata = {
  title: "Phd Students | Human-Centered Computing (HCC)",
  description: "List of phd students on the HCC team",
};

function PhdStudent() {
  return (
    <div>
      <PhdStudentsPage />
    </div>
  );
}

export default PhdStudent;
