import { Button } from "./ui/button";
import { FlipWords } from "./ui/flip-words";
// import { SocialButton } from "./ui/social-buttons";

const Hero = () => {
  const words = [
    "Software Developer",
    "Frontend Developer",
    "AI Enthusiast",
    "Full-Stack Developer",
  ];
  return (
    <section id="hero" className="h-full flex flex-col md:flex-row gap-10">
      {/* Left content : Text - Introduction  */}
      <div className="flex flex-col gap-5 items-center md:items-start justify-center md:w-[60%]">
        <div className="text-5xl font-bold flex flex-col md:flex-row gap-4 items-center md:items-start justify-center">
          {" "}
          <h1>
            {/* Heading */}
            Hello, It's
          </h1>
          <h1 className="text-rose-400">Divya</h1>
        </div>

        {/* Sub-heading */}
        <div className="text-3xl flex flex-col md:flex-row gap-1 items-center md:items-start justify-center">
          {" "}
          <h2>I'm a </h2>
          <h2 className="text-rose-400 font-bold">
            <FlipWords words={words} />
          </h2>
        </div>

        {/* Discription -> who are you + what do you do*/}
        <p className="text-neutral-600 dark:text-neutral-300 text-base w-3/4 text-justify">
          I enjoy solving problems and building practical web and AI-driven
          solutions using JavaScript, C++, and full-stack technologies.
        </p>
        {/* Social links */}
        {/* <div className="flex gap-4 mt-4">
          <SocialButton iconName="LinkedIn" />
          <SocialButton iconName="Github" />
          <SocialButton iconName="Leetcode" />
        </div> */}
        {/* CTA button */}
        <div className="flex gap-4 mt-4">
          <Button name="Resume" />
          <Button name="Contact" />
        </div>
      </div>
      {/* Right content: Image  */}
      <div className="flex items-center justify-end md:w-[40%]">
        <img
          className="border-2 rounded-[50%] h-90 w-90 rotate-y-180 object-cover object-[70%_30%]"
          src="src/assets/main_photo.jpg"
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
