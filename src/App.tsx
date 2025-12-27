import "./App.css";
// import About from "./components/About";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import About from "./components/About";
// import Experience from "./components/Experience";

function App() {
  return (
    <>
      <main className="dark max-h-full bg-black text-white font-inter">
        <div className="mx-16 md:mx-32 lg:mx-40">
          {" "}
          <Navbar />
          <Hero />
          <About />
          {/* <Experience /> */}
        </div>
      </main>
    </>
  );
}

export default App;
