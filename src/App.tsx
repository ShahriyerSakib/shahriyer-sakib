import { useEffect } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import { useHash } from "./hooks/useHash";

export default function App() {
  const hash = useHash();
  const match = hash.match(/^#\/projects\/([\w-]+)$/);

  useEffect(() => {
    if (match) { window.scrollTo(0, 0); return; }
    const id = hash.slice(1);
    requestAnimationFrame(() => (id ? document.getElementById(id)?.scrollIntoView() : window.scrollTo(0, 0)));
  }, [hash]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Background />
      <Navbar />
      {match ? (
        <ProjectDetail slug={match[1]} />
      ) : (
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  );
}
