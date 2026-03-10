import { Metadata } from "next";
import PostDocsPage from "@/pages/PostDocsPage";

export const metadata: Metadata = {
  title: "Postdoc | Human-Centered Computing (HCC)",
  description: "List of postdoc on the HCC team",
};

function PostDocs() {
    return ( 
        <div>
            <PostDocsPage />
        </div>
     );
}

export default PostDocs;
