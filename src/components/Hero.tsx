const Hero = () => {
  return (
    <div id="hero" className="h-full my-24 flex gap-4">
      <section className="flex flex-col gap-5 justify-center w-1/2">
        <h1 className="text-7xl font-bold">Hello, I'm Divya</h1>
        <h2 className="text-5xl">Software Developer</h2>
        <p className="text-slate-200 text-lg">
          I'm a passionate problem solver skilled in Javascript, C++, DSA, and
          full-stack development, driven to build impactful AI-based and
          web-based solutions.
        </p>
        <div className="flex gap-4">
          <button className="bg-sky-600 rounded-3xl text-white text-base font-semibold px-12 py-2 hover:bg-sky-700 hover:text-slate-100">
            Resume
          </button>
          <button className="bg-neutral-500 rounded-3xl text-white text-base font-semibold px-12 py-2 hover:bg-neutral-600 hover:text-slate-100">
            Contact
          </button>
        </div>
      </section>
      <section className="flex items-center justify-center w-1/2 ">
        <img
          className="border-2 rounded-[50%] h-80 w-80"
          src="src/assets/hero.png"
          alt="hero"
        />
      </section>
    </div>
  );
};

export default Hero;
