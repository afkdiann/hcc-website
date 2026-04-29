import PeoplePage from "@/components/PeoplePage";
import { postdocs } from "@/lib/data";

function PostDocsPage() {
  return <PeoplePage currentSection="Postdocs" people={postdocs} />;
}
export default PostDocsPage;
