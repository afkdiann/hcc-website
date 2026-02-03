import Navbar from "@/components/Navbar";

function HomePage() {
  return (  
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className="p-4" >Hello World!</h1>
      </main>
    </div>
  );
}

export default HomePage;