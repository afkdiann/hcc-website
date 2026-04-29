import { Metadata } from "next";
import FacultyPage from "@/components/FacultyPage";

export const metadata: Metadata = {
  title: "Faculty | Human-Centered Computing (HCC)",
  description: "List of faculty members on the HCC team",
};

function Faculty() {
  return (
    <div>
      <FacultyPage />
    </div>
  );
}

export default Faculty;
