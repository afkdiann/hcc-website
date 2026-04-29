import { Metadata } from "next";
import PhdStudentsPage from "@/components/PhdStudentsPage";

export const metadata: Metadata = {
  title: "PhD Students",
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
