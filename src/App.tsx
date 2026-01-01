import "./App.css";
// import About from "./components/About";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="dark max-h-full bg-black text-white font-inter">
        <div className="mx-8 md:mx-32 lg:mx-40">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
