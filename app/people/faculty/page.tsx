import { Metadata } from "next";
import FacultyPage from "@/pages/People/FacultyPage";

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
