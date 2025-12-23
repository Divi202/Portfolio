import "./App.css";
// import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="h-screen bg-slate-950 text-white font-inter">
        <div className="mx-16 md:mx-32 lg:mx-40">
          {" "}
          <Navbar />
          <Hero />
          {/* <About /> */}
        </div>
      </main>
    </>
  );
}

export default App;
