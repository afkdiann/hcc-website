import PeoplePage from "@/components/PeoplePage";
import { faculty } from "@/lib/data";

function FacultyPage() {
  return <PeoplePage currentSection="Faculty" people={faculty} />;
}

export default FacultyPage;
