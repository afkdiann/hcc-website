import { Metadata } from "next";
import PostDocsPage from "@/components/PostDocsPage";

export const metadata: Metadata = {
  title: "Postdocs",
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
