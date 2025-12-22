import "./App.css";
// import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="mx-40">
        <Navbar />
        <Hero />
        {/* <About /> */}
      </main>
    </>
  );
}

export default App;
