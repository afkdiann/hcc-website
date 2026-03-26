import PeoplePage from "@/pages/PeoplePage";
import { phdStudents } from "@/public/data";

function PhdStudentsPage() {

  return ( 
    <PeoplePage currentSection="PHD Students" people={phdStudents} />
   );
}

export default PhdStudentsPage;