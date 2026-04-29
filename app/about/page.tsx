import { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About | Human-Centered Computing (HCC)",
  description: "Information about HCC",
};

function About() {
  return <AboutPage />;
}

export default About;
