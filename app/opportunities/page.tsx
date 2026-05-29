import { Metadata } from "next";
import OpportunitiesPage from "@/components/OpportunitiesPage";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
 title: "Opportunities | Human-Centered Computing (HCC)",
 description: "Hub for student involvement",
};


function Opportunities() {
 return (
   <div>
     <OpportunitiesPage />
     <footer className="mt-12">
       <Footer />
     </footer>
   </div>
 );
}


export default Opportunities;


