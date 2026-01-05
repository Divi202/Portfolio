import { Button } from "./ui/button";
import SectionHeading from "./section-heading";
const About = () => {
  return (
    <section id="about" className="h-full py-24 flex flex-col gap-16">
      {/* Section Heading  */}
      <SectionHeading headingName="About Me" />
      {/* Section Content  */}
      <div className="h-full flex gap-50">
        {" "}
        {/* Left content : Image  */}
        <div className="flex items-center justify-start w-[40%]">
          <img
            className="border-2 rounded-[50%] h-90 w-90 rotate-y-180"
            src="src/assets/download.jpg"
            alt="hero"
          />
        </div>
        {/* Right content : Text  */}
        {/* Goal -> how you think + how you work */}
        <div className="flex flex-col items-start justify-center w-[60%] gap-2">
          {/* - Content heading: Developement/Building is my Passion */}
          <h3 className="text-lg font-medium text-rose-400">
            {/* Development is My Passion */}
            Passionate about building, learning, and improving.
          </h3>
          {/* Description about me  */}
          <p className="text-base text-justify ">
            I enjoy the process of building software from understanding a
            problem to designing a solution and refining it through iteration. I
            focus on strong fundamentals like data structures, clean code, and
            scalable design, while continuously learning modern web and AI
            technologies. For me, growth comes from building, breaking, and
            improving.
          </p>
          <div className="mt-4">
            <Button name="Resume" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
