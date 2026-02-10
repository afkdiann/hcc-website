import { Metadata } from "next";
import NewsPage from "@/pages/NewsPage";

export const metadata: Metadata = {
  title: "News | Human-Centered Computing (HCC)",
  description: "Recent news from the HCC team",
};

function News() {
  return (
    <NewsPage />
  );
}

export default News;
