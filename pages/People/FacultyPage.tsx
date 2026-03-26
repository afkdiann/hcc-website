import PeoplePage from "@/pages/PeoplePage";
import { faculty } from "@/public/data";

function FacultyPage() {
  return ( 
    <PeoplePage currentSection="Faculty" people={faculty}/>
   );
}

export default FacultyPage;