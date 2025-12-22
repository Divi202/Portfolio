const Hero = () => {
  return (
    <div id="hero" className="h-[90vh] border flex gap-4">
      <section className="w-1/2">
        <h1 className="text-6xl font-bold">Hello, I'm Divya</h1>
        <h2 className="text-5xl">Software Developer</h2>
        <p className="mt-4 text-lg">
          I'm a passionate problem solver skilled in Javascript, C++, DSA, and
          full-stack development, driven to build impactful AI-based and
          web-based solutions.
        </p>
        <div className="flex gap-4">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Resume
          </button>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
            Contact
          </button>
        </div>
      </section>
      <section>
        <img src="src/assets/hero.png" alt="hero" />
      </section>
    </div>
  );
};

export default Hero;
