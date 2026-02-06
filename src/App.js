import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Gallery from "@/components/portfolio/Gallery";
import Footer from "@/components/portfolio/Footer";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
