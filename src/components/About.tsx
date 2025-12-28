import { Button } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="h-full pb-32 flex flex-col gap-16">
      {/* Section Heading  */}
      <h2 className="text-2xl font-semibold text-center text-rose-400">
        About Me
      </h2>
      {/* Section Content  */}
      <div className="h-full flex gap-20">
        {" "}
        {/* Left content : Image  */}
        <div className="flex items-center justify-center w-[40%]">
          <img
            className="border-2 rounded-[50%] h-90 w-90 rotate-y-180"
            src="src/assets/download.jpg"
            alt="hero"
          />
        </div>
        {/* Right content : Text  */}
        <div className="flex flex-col items-start justify-center w-[60%] gap-2">
          {/* - Content heading: Developement/Building is my Passion */}
          <h3 className="text-lg font-medium text-rose-400">
            Development is My Passion
          </h3>
          {/* Description about me  */}
          <p className="text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            provident veniam laudantium dolorem omnis laboriosam excepturi
            nostrum labore, nemo ratione debitis odit repellat, quam
            reprehenderit doloribus earum iste voluptas possimus nesciunt fuga
            qui libero! Illum perferendis vero sapiente. Doloribus sint
            molestias facere sapiente veniam neque qui cumque unde eius
            repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Sapiente corrupti facilis, veritatis quasi numquam sequi iste
            delectus deserunt esse est aspernatur, excepturi modi corporis
            commodi officia adipisci! Vitae, ex nam?
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
