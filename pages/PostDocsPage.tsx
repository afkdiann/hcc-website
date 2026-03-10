import PeoplePage from "@/pages/PeoplePage";
import { postdocs } from "@/public/data";

function PostDocsPage() {

  return ( 
    <PeoplePage currentSection="Postdocs" people={postdocs} />
   );
   
}
export default PostDocsPage;