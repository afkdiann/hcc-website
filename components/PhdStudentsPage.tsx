import PeoplePage from "@/components/PeoplePage";
import { phdStudents } from "@/lib/data";

function PhdStudentsPage() {
  return <PeoplePage currentSection="PHD Students" people={phdStudents} />;
}

export default PhdStudentsPage;
