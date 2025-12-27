import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div id="hero" className="h-full my-24 flex gap-10">
      <section className="flex flex-col gap-5 justify-center w-[70%]">
        <h1 className="text-5xl font-bold">
          {/* Heading */}
          Hello, It's <span className="text-rose-400 font-bold">Divya</span>
        </h1>
        {/* Sub-heading */}
        <h2 className="text-3xl">
          I'm a{" "}
          <span className="text-rose-400 font-bold">Software Developer</span>{" "}
        </h2>
        {/* Discription */}
        <p className="text-slate-200 text-base">
          I'm a passionate problem solver skilled in Javascript, C++, DSA, and
          full-stack development, driven to build impactful AI-based and
          web-based solutions. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit.
        </p>
        {/* Social links */}
        <div className="flex gap-4 mt-4">
          <Button name="Resume" />
          <Button name="Contact" />
        </div>
        {/* CTA button */}
        <div className="flex gap-4 mt-4">
          <Button name="Resume" />
          <Button name="Contact" />
        </div>
      </section>
      <section className="flex items-center justify-end w-[30%]">
        <img
          className="border-2 rounded-[50%] h-90 w-90"
          src="src/assets/download.jpg"
          alt="hero"
        />
      </section>
    </div>
  );
};

export default Hero;
